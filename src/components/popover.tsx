'use client';

import * as RadixPopover from '@radix-ui/react-popover';

import type { RCProps } from '@/types';

type PopoverProps = RCProps & {
  trigger: React.ReactNode;
  contentClassName?: string;
};

export function Popover({ children, trigger, contentClassName }: PopoverProps) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content align="end" className={contentClassName}>
          {children}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}
