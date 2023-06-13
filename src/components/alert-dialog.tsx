'use client';

import * as Alert from '@radix-ui/react-alert-dialog';

import { ButtonGroup } from './button-group';
import { FormButton } from './form-button';

type Props = {
  description: string;
  children: React.ReactNode;
  actionElem: React.ReactNode;
  action?: React.ComponentProps<'form'>['action'];
};

export function AlertDialog({
  action,
  children,
  actionElem,
  description,
}: Props) {
  return (
    <Alert.Root>
      <Alert.Trigger asChild>{children}</Alert.Trigger>
      <Alert.Portal>
        <Alert.Overlay className="fixed inset-0 z-50 backdrop-blur" />
        <Alert.Content className="fixed inset-0 z-50 flex h-[75vh] items-center justify-center p-4">
          <div className="max-w-lg rounded-md border bg-neutral-950 p-6">
            <Alert.Title className="text-2xl font-bold">
              Are You Sure
            </Alert.Title>
            <Alert.Description className="mb-6 mt-2 text-neutral-400">
              {description}
            </Alert.Description>
            <ButtonGroup action={action}>
              <Alert.Cancel asChild>
                <FormButton variant="secondary" type="button">
                  Cancel
                </FormButton>
              </Alert.Cancel>
              {actionElem}
            </ButtonGroup>
          </div>
        </Alert.Content>
      </Alert.Portal>
    </Alert.Root>
  );
}
