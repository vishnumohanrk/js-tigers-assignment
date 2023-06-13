import type { RCProps } from '@/types';

import { cn } from './utils';

type Props = RCProps & {
  className?: string;
  action?: React.ComponentProps<'form'>['action'];
};

export function ButtonGroup({ className, ...rest }: Props) {
  const Comp = rest.action ? 'form' : 'div';

  return (
    <Comp
      {...rest}
      className={cn(
        'flex justify-end gap-4 max-md:flex-wrap max-md:[&>*]:w-full',
        className
      )}
    />
  );
}
