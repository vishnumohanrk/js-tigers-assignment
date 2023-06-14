import type { Vendor } from '@prisma/client';

import type { formKeys } from '@/lib/constants';

export type RCProps = {
  children: React.ReactNode;
};

export type VendorPageProps = {
  params: { id: string };
};

export type TForm = Pick<Vendor, (typeof formKeys)[number] | 'id'>;
