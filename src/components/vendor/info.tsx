import { Label } from './label';

type VendorInfoProps = {
  label: string;
  value: string | number | null;
};

export function VendorInfo({ label, value }: VendorInfoProps) {
  return value ? (
    <div className="border-b last:border-b-0 max-md:p-4 md:flex">
      <dt className="shrink-0 text-neutral-400 max-md:mb-0.5 max-md:text-sm md:w-60 md:border-r md:bg-neutral-900 md:p-4 lg:w-72">
        <Label text={label} />
      </dt>
      <dd className="grow break-words font-semibold tracking-wide max-md:text-lg md:p-4">
        {value}
      </dd>
    </div>
  ) : null;
}
