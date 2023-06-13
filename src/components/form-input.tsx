import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '@radix-ui/react-form';

import { Label } from './label';
import { cn } from './utils';

type FormInputProps = {
  name: string;
  required?: boolean;
  multiLine?: boolean;
  defaultValue?: string;
  type?: React.ComponentProps<'input'>['type'];
};

export function FormInput({
  name,
  type = 'text',
  defaultValue,
  required = true,
  multiLine = false,
}: FormInputProps) {
  return (
    <FormField name={name}>
      <div className="mb-2 flex justify-between font-medium">
        <FormLabel className="capitalize">
          <Label text={name} />
        </FormLabel>
        <FormMessage match="valueMissing" className="text-red-400">
          Required
        </FormMessage>
      </div>
      <FormControl
        asChild
        required={required}
        defaultValue={defaultValue}
        className={cn(
          'w-full rounded-md border bg-transparent px-3 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:cursor-not-allowed disabled:opacity-60 data-[invalid]:border-red-500',
          multiLine ? 'h-32 resize-none py-2' : 'h-12'
        )}
      >
        {multiLine ? <textarea /> : <input type={type} />}
      </FormControl>
    </FormField>
  );
}
