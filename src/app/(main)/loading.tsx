import { PageCenter } from '@/components/shared/page-center';

export default function Loading() {
  return (
    <PageCenter>
      <div className="flex flex-col items-center gap-3 text-3xl font-bold tracking-wide text-neutral-400">
        <div className="h-12 w-12 animate-spin rounded-full border-8 border-t-neutral-50" />
        <span>Loading</span>
      </div>
    </PageCenter>
  );
}
