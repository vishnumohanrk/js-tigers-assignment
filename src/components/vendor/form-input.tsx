import { FormControl } from '@radix-ui/react-form';

import { cn, INP_CLASS } from '../utils';

type InpProps = React.ComponentProps<'input'>;

type FormInputProps = {
  multiLine?: boolean;
  defaultValue: InpProps['defaultValue'] | null;
} & Pick<InpProps, 'required' | 'type'>;

export function FormInput({
  defaultValue,
  type = 'text',
  required = true,
  multiLine = false,
}: FormInputProps) {
  return (
    <FormControl
      asChild
      required={required}
      defaultValue={defaultValue ?? ''}
      className={cn(INP_CLASS, multiLine && 'h-32 resize-none py-2')}
    >
      {multiLine ? <textarea /> : <input type={type} />}
    </FormControl>
  );
}
