import Link from 'next/link';
import { MdAccountBalance, MdTag } from 'react-icons/md';

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
      <div className="flex overflow-hidden rounded-b-md border-y">
        <button className="w-1/2 border-r py-3 hover:bg-neutral-900">
          Edit
        </button>
        <button className="w-1/2 py-3 hover:bg-neutral-900">Delete</button>
      </div>
    </li>
  );
}
