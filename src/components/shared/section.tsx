import type { RCProps } from '@/types';

type SectionProps = RCProps & {
  heading: string;
};

export function Section({ children, heading }: SectionProps) {
  return (
    <section>
      <h2 className="sr-only">{heading}</h2>
      {children}
    </section>
  );
}
