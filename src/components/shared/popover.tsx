'use client';

import * as RadixPopover from '@radix-ui/react-popover';

import type { RCProps } from '@/types';

import { cn } from '../utils';

type PopoverProps = RCProps & {
  trigger: React.ReactNode;
  contentClassName?: string;
};

export function Popover({ children, trigger, contentClassName }: PopoverProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          align="end"
          className={cn(
            contentClassName,
            'will-change-transform animate-in slide-in-from-bottom-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom-full md:slide-in-from-top-full md:data-[state=closed]:slide-out-to-top-full'
          )}
        >
          {children}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
