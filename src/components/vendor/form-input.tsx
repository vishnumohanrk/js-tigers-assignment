import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '@radix-ui/react-form';

import { cn } from '../utils';
import { Label } from './label';

type InpProps = React.ComponentProps<'input'>;

type FormInputProps = {
  name: string;
  grow?: boolean;
  multiLine?: boolean;
  serverInvalid?: boolean;
  defaultValue: InpProps['defaultValue'] | null;
} & Pick<InpProps, 'required' | 'type'>;

export function FormInput({
  name,
  defaultValue,
  grow = false,
  type = 'text',
  required = true,
  multiLine = false,
  serverInvalid = false,
}: FormInputProps) {
  return (
    <FormField
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
      <FormControl
        asChild
        required={required}
        defaultValue={defaultValue ?? ''}
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
