'use client';

import { Form, FormSubmit } from '@radix-ui/react-form';

import { FormButton } from '@/components/form-button';
import { FormInput } from '@/components/form-input';

export default function NewVendorPage() {
  return (
    <section>
      <h1 className="sr-only">Vendor Details</h1>
      <Form className="space-y-5">
        <FormInput name="vendorName" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormInput name="bankName" />
          <FormInput name="bankAccountNumber" type="number" />
          <FormInput name="addressLine1" multiLine />
          <FormInput name="addressLine2" multiLine required={false} />
          <FormInput name="city" />
          <FormInput name="zipCode" type="number" />
        </div>
        <FormInput name="country" />
        <div className="flex justify-end">
          <FormSubmit asChild>
            <FormButton variant="primary">Create Vendor</FormButton>
          </FormSubmit>
        </div>
      </Form>
    </section>
  );
}
