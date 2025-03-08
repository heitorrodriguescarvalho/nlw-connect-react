import { cn } from '@/lib/utils'
import { type VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva(
  'cursor-pointer bg-gray-500 text-blue transition-colors duration-300 hover:bg-blue hover:text-gray-900 [&_svg]:size-5',
  {
    variants: {
      size: {
        default:
          'flex h-12 w-full items-center justify-between rounded-xl px-5 font-semibold',
        icon: 'rounded-md p-1.5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}

export default function Button({ size, className, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ size, className }))} {...props} />
  )
}
