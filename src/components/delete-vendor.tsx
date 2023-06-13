import type { RCProps } from '@/types';

import { AlertDialog } from './alert-dialog';
import { FormButton } from './form-button';

export function DeleteVendor({ children }: RCProps) {
  return (
    <AlertDialog
      actionElem={<FormButton variant="danger">Yes, Delete</FormButton>}
      description="This action cannot be undone. This will permanently delete the vendor."
    >
      {children}
    </AlertDialog>
  );
}
