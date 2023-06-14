import { PageCenter } from '@/components/shared/page-center';
import { SignInButton } from '@/components/shared/sign-in-button';
import { getCurrentUser } from '@/lib/session';

export default async function SignInPage() {
  const user = await getCurrentUser();
  const authed = !!user;

  return (
    <PageCenter
      showHomeLink={authed}
      className="min-h-[100svh] gap-5"
      text={authed ? 'You are already Logged in' : ''}
    >
      {!authed && <SignInButton />}
    </PageCenter>
  );
}
