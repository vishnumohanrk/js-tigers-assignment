import Link from 'next/link';
import {
  MdAddCircle,
  MdAddCircleOutline,
  MdDashboard,
  MdOutlineDashboard,
} from 'react-icons/md';

import { NavItem } from './nav-item';

export function NavBar() {
  return (
    <nav className="fixed bottom-0 z-50 w-full flex-col overflow-auto bg-neutral-900 max-md:border-t md:h-[100svh] md:w-64 md:border-r md:p-px">
      <h1 className="max-md:hidden">
        <Link
          href="/"
          className="flex h-14 items-center px-4 text-2xl font-bold"
        >
          Vendors
        </Link>
      </h1>
      <ul className="flex md:mt-1 md:flex-col md:gap-y-1">
        <NavItem
          href="/"
          label="My List"
          icon={<MdOutlineDashboard />}
          activeIcon={<MdDashboard />}
        />
        <NavItem
          href="/new"
          label="Create Vendor"
          icon={<MdAddCircleOutline />}
          activeIcon={<MdAddCircle />}
        />
        {/* <NavItem href="/" label="My List" icon={<Home />} /> */}
      </ul>
    </nav>
  );
}
