import { IoLogoGoogle } from 'react-icons/io5';

import { SignInButton } from '@/app/login/sign-in-button';
import { PageCenter } from '@/components/shared/page-center';

export default async function SignInPage() {
  return (
    <PageCenter className="min-h-[100dvh] gap-5">
      <SignInButton>
        <IoLogoGoogle size={20} />
        Sign in with Google
      </SignInButton>
    </PageCenter>
  );
}
