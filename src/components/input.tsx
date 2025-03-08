import { cn } from '@/lib/utils'

interface InputRootProps extends React.ComponentProps<'div'> {
  error?: boolean
}

export function InputRoot({
  error = false,
  className,
  ...props
}: InputRootProps) {
  return (
    <div
      data-error={error}
      className={cn(
        'group flex h-12 items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-4 focus-within:border-gray-100 data-[error=true]:border-danger',
        className
      )}
      {...props}
    />
  )
}

interface InputIconProps extends React.ComponentProps<'span'> {}

export function InputIcon({ className, ...props }: InputIconProps) {
  return (
    <span
      className={cn(
        'text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger [&_svg]:size-5',
        className
      )}
      {...props}
    />
  )
}

interface InputFieldProps extends React.ComponentProps<'input'> {}

export function InputField({ className, ...props }: InputFieldProps) {
  return (
    <input
      className={cn('flex-1 placeholder-gray-400 outline-0', className)}
      {...props}
    />
  )
}
