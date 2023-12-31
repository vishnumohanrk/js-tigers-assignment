import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '../utils';

export type ButtonProps = {
  asChild?: boolean;
  variant: 'primary' | 'secondary' | 'danger';
} & React.ComponentPropsWithRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, type, asChild = false, ...rest }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        {...rest}
        ref={ref}
        type={type || 'button'}
        className={cn(
          'inline-flex h-12 items-center justify-center gap-3 rounded-md px-10 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:cursor-not-allowed disabled:opacity-60',
          variant === 'primary' &&
            'bg-neutral-50 text-neutral-950 hover:bg-neutral-300 focus:ring-neutral-50',
          variant === 'secondary' &&
            'border hover:bg-neutral-800 focus:ring-neutral-800',
          variant === 'danger' &&
            'bg-red-700 hover:bg-red-800 focus:ring-red-700',
          className
        )}
      />
    );
  }
);

Button.displayName = 'Button';
