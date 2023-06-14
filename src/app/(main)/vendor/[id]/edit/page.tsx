import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { VendorForm } from '@/components/vendor/form';
import { db } from '@/lib/db';
import { validateForm, validateOwner } from '@/lib/utils';
import type { VendorPageProps } from '@/types';

import { getVendorById } from '../api';

export default async function EditVendorPage({ params }: VendorPageProps) {
  const vendor = await getVendorById(params.id);

  async function updateVendor(formData: FormData) {
    'use server';
    const data = validateForm(formData);
    await validateOwner(params.id);
    await db.vendor.update({
      where: { id: params.id },
      data,
    });

    revalidatePath('/');
    redirect(`/vendor/${params.id}`);
  }

  return (
    <section>
      <h2 className="sr-only">Edit Vendor Details</h2>
      <VendorForm type="update" action={updateVendor} vendor={vendor} />
    </section>
  );
}
