'use client';

import { signOut } from 'next-auth/react';

import { Button } from './button';

export function SignOutButton() {
  function handleClick() {
    signOut();
  }

  return (
    <Button variant="secondary" onClick={handleClick} className="h-10">
      Sign Out
    </Button>
  );
}
