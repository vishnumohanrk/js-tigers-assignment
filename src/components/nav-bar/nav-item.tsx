'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn, NAV_ITEM_CLASS } from '../utils';

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
    <Link
      href={href}
      className={cn(
        NAV_ITEM_CLASS,
        'font-semibold text-neutral-400 hover:underline',
        isActive && 'text-neutral-50'
      )}
    >
      <span className="md:hidden">{isActive ? activeIcon : icon}</span>
      <span className="max-md:sr-only">{label}</span>
    </Link>
  );
}
