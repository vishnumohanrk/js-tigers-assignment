import Link from 'next/link';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import { Button } from '@/components/shared/button';
import { ButtonGroup } from '@/components/shared/button-group';
import { Section } from '@/components/shared/section';
import { DeleteVendor } from '@/components/vendor/delete';
import { VendorInfo } from '@/components/vendor/info';
import { formKeys } from '@/lib/constants';
import type { VendorPageProps } from '@/types';

import { getVendorById } from './api';

export default async function VendorPage({ params: { id } }: VendorPageProps) {
  const vendor = await getVendorById(id);

  return (
    <Section heading="Vendor Details">
      <dl className="overflow-hidden rounded-md border">
        {formKeys.map((i) => (
          <VendorInfo key={i} label={i} value={vendor[i]} />
        ))}
      </dl>
      <ButtonGroup className="mt-6">
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
    </Section>
  );
}
