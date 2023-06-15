'use client';

import { signIn } from 'next-auth/react';

import { Button } from '@/components/shared/button';
import type { RCProps } from '@/types';

export function SignInButton({ children }: RCProps) {
  function handleClick() {
    signIn('google');
  }

  return (
    <Button variant="secondary" onClick={handleClick}>
      {children}
    </Button>
  );
}
