'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn, NAV_ITEM_CLASS } from './utils';

type Props = {
  label: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  href: React.ComponentProps<typeof Link>['href'];
};

export function NavItem({ activeIcon, icon, href, label }: Props) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <li className="w-full">
      <Link
        href={href}
        className={cn(NAV_ITEM_CLASS, isActive && 'text-neutral-50')}
      >
        {isActive ? activeIcon : icon}
        {label}
      </Link>
    </li>
  );
}
