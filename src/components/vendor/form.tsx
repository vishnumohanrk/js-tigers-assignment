'use client';

import { Form, FormControl, FormSubmit } from '@radix-ui/react-form';
import Link from 'next/link';
import { useState } from 'react';

import { formKeys } from '@/lib/constants';
import type { TForm } from '@/types';

import { Button } from '../shared/button';
import { ButtonGroup } from '../shared/button-group';
import { FormButton } from '../shared/form-button';
import { INP_CLASS } from '../utils';
import { FormField } from './form-field';
import { FormInput } from './form-input';

type TErrors = Partial<Record<keyof TForm, string[]>>;

type Props = {
  countryList: React.ReactNode;
  action: (formData: FormData) => Promise<TErrors>;
} & ({ type: 'update'; vendor: TForm } | { type: 'create'; vendor?: never });

const FIELDS = formKeys.filter((i) => i !== 'country');

export function VendorForm({ action, type, vendor, countryList }: Props) {
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
      {FIELDS.map((i) => (
        <FormField
          key={i}
          name={i}
          grow={i === 'vendorName'}
          serverInvalid={error && !!error[i]}
        >
          <FormInput
            required={i !== 'addressLine2'}
            multiLine={i.includes('address')}
            defaultValue={vendor && vendor[i]}
            type={i === 'bankAccountNumber' ? 'number' : 'text'}
          />
        </FormField>
      ))}
      <FormField grow name="country" serverInvalid={!!error?.country}>
        <FormControl asChild>
          <select required className={INP_CLASS} defaultValue={vendor?.country}>
            {countryList}
          </select>
        </FormControl>
      </FormField>
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
