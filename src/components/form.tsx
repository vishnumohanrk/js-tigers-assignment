'use client';

import { Form, FormSubmit } from '@radix-ui/react-form';

import { FormButton } from '@/components/form-button';
import { FormInput } from '@/components/form-input';
import type { TForm } from '@/types';

type Props = {
  action: React.ComponentProps<'form'>['action'];
} & ({ type: 'update'; vendor: TForm } | { type: 'create'; vendor?: never });

export function VendorForm({ action, type, vendor }: Props) {
  return (
    <Form className="space-y-5" action={action}>
      <FormInput name="vendorName" defaultValue={vendor?.vendorName} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
        <FormInput
          name="zipCode"
          type="number"
          defaultValue={vendor?.zipCode}
        />
      </div>
      <FormInput name="country" defaultValue={vendor?.country} />
      <div className="flex justify-end">
        <FormSubmit asChild>
          <FormButton variant="primary" className="capitalize">
            {type} Vendor
          </FormButton>
        </FormSubmit>
      </div>
    </Form>
  );
}
