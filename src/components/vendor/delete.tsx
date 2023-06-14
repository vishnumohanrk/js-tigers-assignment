import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { validateOwner } from '@/lib/utils';
import type { RCProps } from '@/types';

import { AlertDialog } from '../shared/alert-dialog';
import { FormButton } from '../shared/form-button';

type DeleteVendorProps = RCProps & {
  id: string;
};

export function DeleteVendor({ children, id }: DeleteVendorProps) {
  async function deleteVendor() {
    'use server';
    await validateOwner(id);
    await db.vendor.delete({ where: { id } });

    redirect('/');
  }

  return (
    <AlertDialog
      action={deleteVendor}
      actionElem={<FormButton variant="danger">Yes, Delete</FormButton>}
      description="This action cannot be undone. This will permanently delete the vendor."
    >
      {children}
    </AlertDialog>
  );
}
