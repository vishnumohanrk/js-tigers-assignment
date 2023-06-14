import Link from 'next/link';

import { PageCenter } from '@/components/shared/page-center';
import { Section } from '@/components/shared/section';
import { VendorCard } from '@/components/vendor/card';
import { PaginateLink } from '@/components/vendor/paginate-link';
import { VENDOR_LIST_SELECT } from '@/lib/constants';
import { db } from '@/lib/db';
import { getAuthUserId } from '@/lib/session';

async function getVendorList(page?: string) {
  const take = 10;
  let currentPage = Number(page) || 1;

  if (currentPage < 0) {
    currentPage = 1;
  }

  const skip = (currentPage - 1) * take;

  const userId = await getAuthUserId();
  const [vendors, count] = await Promise.all([
    db.vendor.findMany({
      where: { userId },
      select: VENDOR_LIST_SELECT,
      take,
      skip,
      orderBy: { createdAt: 'desc' },
    }),
    db.vendor.count({ where: { userId } }),
  ]);

  const next = currentPage * take < count ? currentPage + 1 : null;
  const previous = currentPage > 1 ? currentPage - 1 : null;

  return { vendors, next, previous };
}

export default async function AppHome({
  searchParams: { page },
}: {
  searchParams: { page?: string };
}) {
  const { next, previous, vendors } = await getVendorList(page);

  return (
    <Section heading="My List" className="flex min-h-[--ht] flex-col">
      {vendors.length === 0 ? (
        <PageCenter
          text={previous ? '' : `You haven't created any vendors yet`}
        >
          <Link
            href={previous ? '/' : '/new'}
            className="font-medium underline"
          >
            {previous ? 'Home' : 'Create Now'}
          </Link>
        </PageCenter>
      ) : (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {vendors.map((i) => (
            <VendorCard key={i.id} {...i} />
          ))}
        </ul>
      )}
      <div className="mt-6 flex grow items-end justify-between gap-5">
        <PaginateLink text="Newer" token={previous} />
        <PaginateLink text="Older" token={next} className="ml-auto" />
      </div>
    </Section>
  );
}
