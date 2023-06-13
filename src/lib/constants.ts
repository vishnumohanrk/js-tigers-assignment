import type { Prisma } from '@prisma/client';

export const formKeys = [
  'vendorName',
  'bankName',
  'bankAccountNumber',
  'addressLine1',
  'addressLine2',
  'city',
  'zipCode',
  'country',
] as const;

export const VENDOR_LIST_SELECT = {
  id: true,
  bankName: true,
  vendorName: true,
  bankAccountNumber: true,
} satisfies Prisma.VendorSelect;
