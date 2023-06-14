import 'server-only';

import { z } from 'zod';

import { db } from './db';
import { getAuthUserId } from './session';

const reqVal = z.string().nonempty();

const formSchema = z.object({
  vendorName: reqVal,
  bankName: reqVal,
  bankAccountNumber: reqVal,
  addressLine1: reqVal,
  addressLine2: z.string().nullable(),
  city: reqVal,
  zipCode: reqVal,
  country: reqVal,
});

export function validateForm(formData: FormData) {
  return formSchema.safeParse(Object.fromEntries(formData));
}

export async function validateOwner(id: string) {
  const userId = await getAuthUserId();
  await db.vendor.findFirstOrThrow({
    where: { id, userId },
    select: null,
  });
}
