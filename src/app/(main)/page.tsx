import { VendorCard } from '@/components/vendor-card';
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
    <section>
      <h1 className="sr-only">Vendor List</h1>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {vendors.map((i) => (
          <VendorCard key={i.id} {...i} />
        ))}
      </ul>
    </section>
  );
}
