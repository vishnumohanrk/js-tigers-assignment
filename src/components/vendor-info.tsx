import { Label } from './label';

type VendorInfoProps = {
  value: string;
  label: string;
};

export function VendorInfo({ label, value }: VendorInfoProps) {
  return (
    <div className="border-b last:border-b-0 max-lg:p-4 lg:flex">
      <dt className="text-neutral-400 max-lg:mb-0.5 max-lg:text-sm lg:w-60 lg:border-r lg:bg-neutral-900 lg:p-4">
        <Label text={label} />
      </dt>
      <dd className="grow font-semibold tracking-wide max-lg:text-lg lg:p-4">
        {value}
      </dd>
    </div>
  );
}
