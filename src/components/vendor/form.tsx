'use client';

import { Form, FormSubmit } from '@radix-ui/react-form';
import Link from 'next/link';

import type { TForm } from '@/types';

import { Button } from '../shared/button';
import { ButtonGroup } from '../shared/button-group';
import { FormButton } from '../shared/form-button';
import { FormInput } from './form-input';

type Props = {
  action: React.ComponentProps<'form'>['action'];
} & ({ type: 'update'; vendor: TForm } | { type: 'create'; vendor?: never });

export function VendorForm({ action, type, vendor }: Props) {
  return (
    <Form className="grid grid-cols-1 gap-5 md:grid-cols-2" action={action}>
      <FormInput name="vendorName" defaultValue={vendor?.vendorName} grow />
      <FormInput name="bankName" defaultValue={vendor?.bankName} />
      <FormInput
        type="number"
        name="bankAccountNumber"
        defaultValue={vendor?.bankAccountNumber}
      />
      <FormInput
        multiLine
        name="addressLine1"
        defaultValue={vendor?.addressLine1}
      />
      <FormInput
        multiLine
        required={false}
        name="addressLine2"
        defaultValue={vendor?.addressLine2}
      />
      <FormInput name="city" defaultValue={vendor?.city} />
      <FormInput name="zipCode" defaultValue={vendor?.zipCode} />
      <FormInput name="country" defaultValue={vendor?.country} grow />
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
