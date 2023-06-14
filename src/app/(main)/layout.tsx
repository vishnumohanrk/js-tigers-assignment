import { NavBar } from '@/components/nav-bar';
import type { RCProps } from '@/types';

export default function MainLayout({ children }: RCProps) {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-screen-lg p-4 max-md:pb-20 md:pt-20">
        {children}
      </main>
    </>
  );
}
