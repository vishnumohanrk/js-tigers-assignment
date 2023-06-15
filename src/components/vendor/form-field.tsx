import {
  FormField as RadixFormField,
  FormLabel,
  FormMessage,
} from '@radix-ui/react-form';

import type { RCProps } from '@/types';

import { Label } from './label';

type FormFieldProps = RCProps & {
  name: string;
  grow?: boolean;
  serverInvalid?: boolean;
};

export function FormField({
  name,
  children,
  grow = false,
  serverInvalid = false,
}: FormFieldProps) {
  return (
    <RadixFormField
      name={name}
      serverInvalid={serverInvalid}
      className={grow ? 'md:col-span-2' : ''}
    >
      <div className="mb-2 flex justify-between font-medium">
        <FormLabel>
          <Label text={name} />
        </FormLabel>
        <FormMessage match="valueMissing" className="text-red-400">
          Required
        </FormMessage>
        <FormMessage
          match="typeMismatch"
          className="text-red-400"
          forceMatch={serverInvalid}
        >
          Please enter valid value
        </FormMessage>
      </div>
      {children}
    </RadixFormField>
  );
}
