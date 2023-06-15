import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Parameters<typeof twMerge>) {
  return twMerge(inputs);
}

export const NAV_ITEM_CLASS =
  'nav-item flex h-16 items-center justify-center px-4 max-md:w-1/3';

export const INP_CLASS =
  'h-12 w-full rounded-md border bg-neutral-950 px-3 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:cursor-not-allowed disabled:opacity-60 data-[invalid]:border-red-500';
