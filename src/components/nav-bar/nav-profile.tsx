import { getCurrentUser } from '@/lib/session';

import { ButtonGroup } from '../shared/button-group';
import { Popover } from '../shared/popover';
import { SignOutButton } from '../shared/sign-out-button';
import { UserAvatar } from '../shared/user-avatar';
import { cn, NAV_ITEM_CLASS } from '../utils';

export async function NavProfile() {
  const user = await getCurrentUser();

  if (!user) return null;

  return (
    <Popover
      contentClassName="my-2 w-[calc(100vw-2rem)] rounded-md border bg-neutral-900 p-4 max-md:-translate-x-4 md:w-96"
      trigger={
        <button type="button" className={cn(NAV_ITEM_CLASS, 'max-md:w-1/3')}>
          <UserAvatar {...user} className="h-9 w-9" />
        </button>
      }
    >
      <div className="flex items-center gap-4 font-semibold">
        <UserAvatar {...user} className="h-14 w-14" />
        <div>
          <p className="truncate font-medium">{user.name}</p>
          <p className="truncate text-sm text-neutral-400">{user.email}</p>
        </div>
      </div>
      <ButtonGroup wrap={false} className="mt-6">
        <SignOutButton />
      </ButtonGroup>
    </Popover>
  );
}
