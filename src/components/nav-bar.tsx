import Link from 'next/link';
import {
  MdAddCircle,
  MdAddCircleOutline,
  MdHome,
  MdOutlineHome,
} from 'react-icons/md';

import { NavItem } from './nav-item';
import { NavProfile } from './nav-profile';

export function NavBar() {
  return (
    <header className="fixed bottom-0 z-50 h-16 w-full border-b bg-neutral-900 max-md:border-t md:top-0">
      <div className="mx-auto flex max-w-screen-lg items-center md:px-4">
        <h1 className="text-2xl font-bold max-md:hidden">
          <Link href="/" className="flex h-16 items-center">
            Vendor Management
          </Link>
        </h1>
        <nav className="flex grow justify-end">
          <NavItem
            href="/"
            label="My List"
            icon={<MdOutlineHome />}
            activeIcon={<MdHome />}
          />
          <NavItem
            href="/new"
            label="Create Vendor"
            icon={<MdAddCircleOutline />}
            activeIcon={<MdAddCircle />}
          />
          <NavProfile />
        </nav>
      </div>
    </header>
  );
}
