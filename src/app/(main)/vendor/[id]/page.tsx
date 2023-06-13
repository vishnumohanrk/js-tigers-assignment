import Link from 'next/link';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import { Button } from '@/components/button';
import { ButtonGroup } from '@/components/button-group';
import { DeleteVendor } from '@/components/delete-vendor';
import { VendorInfo } from '@/components/vendor-info';

export default function VendorPage() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">Vendor Details</h1>
      <dl className="overflow-hidden rounded-md border">
        {Object.entries(vendor).map(([i, j]) => (
          <VendorInfo key={i} label={i} value={j} />
        ))}
      </dl>
      <ButtonGroup className="mt-8">
        <Button variant="secondary" asChild>
          <Link href="/vendor/99/edit">
            <MdModeEdit size={20} /> Edit Vendor
          </Link>
        </Button>
        <DeleteVendor>
          <Button variant="danger">
            <MdDelete size={20} /> Delete Vendor
          </Button>
        </DeleteVendor>
      </ButtonGroup>
    </section>
  );
}

const vendor = {
  vendorName: 'Lorem Ipsum',
  bankName: 'Lorem Bank',
  bankAccountNumber: '9090909090',
  addressLine1: 'Flat 1010, 10th Tower, Lorem Apartments',
  addressLine2: 'Lorem Street, Lorem Nagar',
  city: 'Chennai',
  zipCode: '909090',
  country: 'India',
};
