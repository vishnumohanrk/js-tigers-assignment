import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { Section } from '@/components/shared/section';
import { CountryList } from '@/components/vendor/country-list';
import { VendorForm } from '@/components/vendor/form';
import { db } from '@/lib/db';
import { validateForm, validateOwner } from '@/lib/utils';
import type { VendorPageProps } from '@/types';

import { getVendorById } from '../api';

export default async function EditVendorPage({ params }: VendorPageProps) {
  const vendor = await getVendorById(params.id);

  async function updateVendor(formData: FormData) {
    'use server';
    const validation = validateForm(formData);

    if (validation.success) {
      await validateOwner(params.id);
      await db.vendor.update({
        where: { id: params.id },
        data: validation.data,
      });

      revalidatePath('/');
      redirect(`/vendor/${params.id}`);
    }

    return validation.error.flatten().fieldErrors;
  }

  return (
    <Section heading="Edit Vendor Details">
      <VendorForm
        type="update"
        vendor={vendor}
        action={updateVendor}
        countryList={<CountryList />}
      />
    </Section>
  );
}

export const fetchCache = 'default-cache';
