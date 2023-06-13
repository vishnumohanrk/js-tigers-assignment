import Link from 'next/link';
import { MdAccountBalance, MdTag } from 'react-icons/md';

import { DeleteVendor } from './delete-vendor';

export function VendorCard() {
  return (
    <li className="rounded-md border-x">
      <Link href="/vendor/99">
        <h2 className="rounded-t-md border-y bg-neutral-900 px-4 py-3 text-xl font-bold">
          lorem2
        </h2>
        <div className="p-4 text-neutral-400">
          <p className="flex items-center gap-2">
            <MdAccountBalance />
            Lorem Bank
          </p>
          <p className="flex items-center gap-2">
            <MdTag />
            90909090
          </p>
        </div>
      </Link>
      <div className="flex">
        <Link
          href="/vendor/99/edit"
          className={`${CARD_ACTION_CLASS} rounded-bl-md border-r text-center`}
        >
          Edit
        </Link>
        <DeleteVendor>
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
