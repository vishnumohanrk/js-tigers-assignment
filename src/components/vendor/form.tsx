'use client';

import { Form, FormSubmit } from '@radix-ui/react-form';
import Link from 'next/link';
import { useState } from 'react';

import { formKeys } from '@/lib/constants';
import type { TForm } from '@/types';

import { Button } from '../shared/button';
import { ButtonGroup } from '../shared/button-group';
import { FormButton } from '../shared/form-button';
import { FormInput } from './form-input';

type TErrors = Partial<Record<keyof TForm, string[]>>;

type Props = {
  action: (formData: FormData) => Promise<TErrors>;
} & ({ type: 'update'; vendor: TForm } | { type: 'create'; vendor?: never });

export function VendorForm({ action, type, vendor }: Props) {
  const [error, setErrors] = useState<TErrors | undefined>(undefined);

  async function submit(formData: FormData) {
    const serverErrors = await action(formData);
    setErrors(serverErrors);
  }

  return (
    <Form
      action={submit}
      className="grid grid-cols-1 gap-5 md:grid-cols-2"
      onClearServerErrors={() => setErrors(undefined)}
    >
      {formKeys.map((i) => (
        <FormInput
          key={i}
          name={i}
          required={i !== 'addressLine2'}
          multiLine={i.includes('address')}
          defaultValue={vendor && vendor[i]}
          serverInvalid={error && !!error[i]}
          grow={i === 'vendorName' || i === 'country'}
          type={i === 'bankAccountNumber' ? 'number' : 'text'}
        />
      ))}
      <ButtonGroup className="md:col-span-2">
        {type === 'update' && (
          <Button variant="secondary" asChild>
            <Link href={`/vendor/${vendor.id}`}>Cancel</Link>
          </Button>
        )}
        <FormSubmit asChild>
          <FormButton variant="primary" className="capitalize">
            {type} Vendor
          </FormButton>
        </FormSubmit>
      </ButtonGroup>
    </Form>
  );
}
