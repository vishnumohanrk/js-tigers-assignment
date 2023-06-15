import './globals.css';

import { Inter } from 'next/font/google';

import type { RCProps } from '@/types';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Vendor Management',
  description: 'JS Tigers Task built with Next.js, MongoDB',
};

export default function RootLayout({ children }: RCProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-950 font-sans text-neutral-50 antialiased">
        {children}
      </body>
    </html>
  );
}
