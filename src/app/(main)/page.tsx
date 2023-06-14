import Link from 'next/link';

import { PageCenter } from '@/components/shared/page-center';
import { Section } from '@/components/shared/section';
import { VendorCard } from '@/components/vendor/card';
import { VENDOR_LIST_SELECT } from '@/lib/constants';
import { db } from '@/lib/db';
import { getAuthUserId } from '@/lib/session';

async function getVendorList() {
  const userId = await getAuthUserId();
  const vendors = await db.vendor.findMany({
    where: { userId },
    select: VENDOR_LIST_SELECT,
  });

  return vendors;
}

export default async function AppHome() {
  const vendors = await getVendorList();

  return (
    <Section heading="My List">
      {vendors.length === 0 ? (
        <PageCenter text="You haven't created any vendors yet">
          <Link href="/new" className="font-medium underline">
            Create Now
          </Link>
        </PageCenter>
      ) : (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {vendors.map((i) => (
            <VendorCard key={i.id} {...i} />
          ))}
        </ul>
      )}
    </Section>
  );
}
