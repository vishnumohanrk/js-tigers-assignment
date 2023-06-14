import { notFound } from 'next/navigation';
import { cache } from 'react';

import { db } from '@/lib/db';
import { getAuthUserId } from '@/lib/session';

export const getVendorById = cache(async (id: string) => {
  try {
    const [vendor, userId] = await Promise.all([
      db.vendor.findUnique({
        where: { id },
      }),
      getAuthUserId(),
    ]);

    const isAuthor = vendor?.userId === userId;

    if (!vendor || !isAuthor) {
      notFound();
    }

    return vendor;
  } catch (e) {
    notFound();
  }
});
