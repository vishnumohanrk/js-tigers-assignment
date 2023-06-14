import Link from 'next/link';

import { PageCenter } from '@/components/shared/page-center';
import { Section } from '@/components/shared/section';
import { VendorCard } from '@/components/vendor/card';
import { PaginateLink } from '@/components/vendor/paginate-link';
import { VENDOR_LIST_SELECT } from '@/lib/constants';
import { db } from '@/lib/db';
import { getAuthUserId } from '@/lib/session';

async function getVendorList(page?: string) {
  const userId = await getAuthUserId();
  const count = await db.vendor.count({ where: { userId } });

  const take = 10;
  let currentPage = Number(page) || 1;

  if (currentPage * take > count || currentPage < 0) {
    currentPage = 1;
  }

  const skip = (currentPage - 1) * take;

  const vendors = await db.vendor.findMany({
    where: { userId },
    select: VENDOR_LIST_SELECT,
    take,
    skip,
    orderBy: { id: 'desc' },
  });

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
        <PageCenter text="You haven't created any vendors yet">
          <Link href="/new" className="font-medium underline">
            Create Now
          </Link>
        </PageCenter>
      ) : (
        <ul className="grid grow grid-cols-1 gap-5 sm:grid-cols-2">
          {vendors.map((i) => (
            <VendorCard key={i.id} {...i} />
          ))}
        </ul>
      )}
      <div className="mt-6 flex justify-between gap-5">
        <PaginateLink text="Older" token={previous} />
        <PaginateLink text="Newer" token={next} className="ml-auto" />
      </div>
    </Section>
  );
}
