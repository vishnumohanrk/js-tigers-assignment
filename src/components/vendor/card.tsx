import type { Vendor } from '@prisma/client';
import Link from 'next/link';
import { MdAccountBalance, MdTag } from 'react-icons/md';

import type { VENDOR_LIST_SELECT } from '@/lib/constants';

import { DeleteVendor } from './delete';

export function VendorCard({
  id,
  bankName,
  vendorName,
  bankAccountNumber,
}: Pick<Vendor, keyof typeof VENDOR_LIST_SELECT>) {
  return (
    <li className="rounded-md border-x">
      <Link href={`/vendor/${id}`}>
        <h3 className="truncate rounded-t-md border-y bg-neutral-900 px-4 py-3 text-xl font-bold">
          {vendorName}
        </h3>
        <div className="p-4 text-neutral-400">
          <p className="truncate">
            <MdAccountBalance className="mr-2 inline" />
            {bankName}
          </p>
          <p className="truncate">
            <MdTag className="mr-2 inline" />
            {bankAccountNumber}
          </p>
        </div>
      </Link>
      <div className="flex">
        <Link
          href={`/vendor/${id}/edit`}
          className={`${CARD_ACTION_CLASS} rounded-bl-md border-r text-center`}
        >
          Edit
        </Link>
        <DeleteVendor id={id}>
          <button
            type="button"
            className={`${CARD_ACTION_CLASS} rounded-br-md text-red-400`}
          >
            Delete
          </button>
        </DeleteVendor>
      </div>
    </li>
  );
}

const CARD_ACTION_CLASS = 'w-1/2 border-y py-3 hover:bg-neutral-900';
