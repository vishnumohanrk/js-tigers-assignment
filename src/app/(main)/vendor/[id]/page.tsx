import { VendorInfo } from '@/components/vendor-info';

export default function VendorPage() {
  return (
    <section>
      <h1 className="sr-only">Vendor Details</h1>
      <dl className="overflow-hidden rounded-md border">
        {Object.entries(vendor).map(([i, j]) => (
          <VendorInfo key={i} label={i} value={j} />
        ))}
      </dl>
    </section>
  );
}

const vendor = {
  vendorName: 'Lorem Ipsum',
  bankName: 'Lorem Bank',
  bankAccountNumber: '9090909090',
  addressLine1: 'Flat 1010, 10th Tower, Lorem Apartments',
  addressLine2: 'Lorem Street, Lorem Nagar',
  city: 'Chennai',
  zipCode: '909090',
  country: 'India',
};
