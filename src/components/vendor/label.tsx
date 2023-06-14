import { useMemo } from 'react';

export function Label({ text }: { text: string }) {
  const label = useMemo(() => text.split(/(?=[A-Z0-9])/).join(' '), [text]);

  return <span className="capitalize">{label}</span>;
}
