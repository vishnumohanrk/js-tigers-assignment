'use client';

import { signIn } from 'next-auth/react';
import { IoLogoGoogle } from 'react-icons/io5';

import { Button } from '@/components/shared/button';

export function SignInButton() {
  function handleClick() {
    signIn('google');
  }

  return (
    <Button variant="secondary" onClick={handleClick}>
      <IoLogoGoogle size={20} />
      Sign in with Google
    </Button>
  );
}
