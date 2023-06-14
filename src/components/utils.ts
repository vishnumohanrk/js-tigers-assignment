import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Parameters<typeof twMerge>) {
  return twMerge(inputs);
}

export const NAV_ITEM_CLASS =
  'nav-item flex h-16 items-center justify-center px-4 max-md:w-1/3';
