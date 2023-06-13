import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { VendorForm } from '@/components/form';
import { db } from '@/lib/db';
import { getAuthUserId } from '@/lib/session';
import { validateForm } from '@/lib/utils';

async function createVendor(formData: FormData) {
  'use server';
  const data = validateForm(formData);
  const userId = await getAuthUserId();
  const vendor = await db.vendor.create({
    data: { ...data, userId },
    select: { id: true },
  });

  revalidatePath('/');
  redirect(`/vendor/${vendor.id}`);
}

export default function NewVendorPage() {
  return (
    <section>
      <h2 className="sr-only">Vendor Details</h2>
      <VendorForm type="create" action={createVendor} />
    </section>
  );
}
