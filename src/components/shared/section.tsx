import type { RCProps } from '@/types';

type SectionProps = RCProps & {
  heading: string;
  className?: string;
};

export function Section({ children, heading, className }: SectionProps) {
  return (
    <section className={className}>
      <h2 className="sr-only">{heading}</h2>
      {children}
    </section>
  );
}
