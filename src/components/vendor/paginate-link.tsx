import Link from 'next/link';

import { Button } from '../shared/button';

type Props = {
  text: string;
  className?: string;
  token: number | null;
};

export function PaginateLink({ text, token, className }: Props) {
  return token ? (
    <Button
      asChild
      variant="secondary"
      className={`w-1/2 px-0 sm:w-48 ${className}`}
    >
      <Link href={`?page=${token}`}>{text}</Link>
    </Button>
  ) : null;
}
