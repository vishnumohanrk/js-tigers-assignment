import { VendorCard } from '@/components/vendor-card';

export default function AppHome() {
  return (
    <section>
      <h1 className="sr-only">Vendor List</h1>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
      </ul>
    </section>
  );
}
