import Link from 'next/link';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import { Button } from '@/components/button';
import { ButtonGroup } from '@/components/button-group';
import { DeleteVendor } from '@/components/delete-vendor';
import { VendorInfo } from '@/components/vendor-info';
import { formKeys } from '@/lib/constants';
import type { VendorPageProps } from '@/types';

import { getVendorById } from './api';

export default async function VendorPage({ params: { id } }: VendorPageProps) {
  const vendor = await getVendorById(id);

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Vendor Details</h1>
      <dl className="overflow-hidden rounded-md border">
        {formKeys.map((i) => (
          <VendorInfo key={i} label={i} value={vendor[i]} />
        ))}
      </dl>
      <ButtonGroup className="mt-8">
        <Button variant="secondary" asChild>
          <Link href={`/vendor/${id}/edit`}>
            <MdModeEdit size={20} /> Edit Vendor
          </Link>
        </Button>
        <DeleteVendor id={id}>
          <Button variant="danger">
            <MdDelete size={20} /> Delete Vendor
          </Button>
        </DeleteVendor>
      </ButtonGroup>
    </section>
  );
}
