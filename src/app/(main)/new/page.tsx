import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { Section } from '@/components/shared/section';
import { CountryList } from '@/components/vendor/country-list';
import { VendorForm } from '@/components/vendor/form';
import { db } from '@/lib/db';
import { getAuthUserId } from '@/lib/session';
import { validateForm } from '@/lib/utils';

async function createVendor(formData: FormData) {
  'use server';
  const validation = validateForm(formData);

  if (validation.success) {
    const userId = await getAuthUserId();
    const vendor = await db.vendor.create({
      data: { ...validation.data, userId },
      select: { id: true },
    });

    revalidatePath('/');
    redirect(`/vendor/${vendor.id}`);
  }

  return validation.error.flatten().fieldErrors;
}

export default function NewVendorPage() {
  return (
    <Section heading="Create New Vendor">
      <VendorForm
        type="create"
        action={createVendor}
        countryList={<CountryList />}
      />
    </Section>
  );
}

export const fetchCache = 'default-cache';
