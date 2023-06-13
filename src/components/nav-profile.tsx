'use client';

import { signOut } from 'next-auth/react';

import type { RCProps } from '@/types';

import { NAV_ITEM_CLASS } from './utils';

export async function NavProfile({ children }: RCProps) {
  function handleClick() {
    signOut();
  }

  return (
    <button type="button" className={NAV_ITEM_CLASS} onClick={handleClick}>
      {children}
    </button>
  );
}
