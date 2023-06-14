import type { User } from 'next-auth';

export function Avatar({
  name,
  size,
  image,
}: Pick<User, 'image' | 'name'> & { size: number }) {
  if (!image || !name) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image}
      width={size}
      height={size}
      alt={`@${name}`}
      className="rounded-full object-cover"
    />
  );
}
