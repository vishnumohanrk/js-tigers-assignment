import 'server-only';

import { z } from 'zod';

import { db } from './db';
import { getAuthUserId } from './session';

const formSchema = z.object({
  vendorName: z.string(),
  bankName: z.string(),
  bankAccountNumber: z.string(),
  addressLine1: z.string(),
  addressLine2: z.string().nullable(),
  city: z.string(),
  zipCode: z.string(),
  country: z.string(),
});

export function validateForm(formData: FormData) {
  return formSchema.parse(Object.fromEntries(formData));
}

export async function validateOwner(id: string) {
  const userId = await getAuthUserId();
  await db.vendor.findFirstOrThrow({
    where: { id, userId },
    select: null,
  });
}
