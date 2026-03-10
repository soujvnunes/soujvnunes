import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared/utils/shadcn'

const buttonVariants = cva(
  'inline-flex items-center justify-center align-middle uppercase motion-safe:transition-colors',
  {
    variants: {
      variant: {
        toned: 'bg-amber-500/10 text-main-secondary hover:bg-amber-500/20',
      },
      size: {
        sm: 'h-8 min-w-8 rounded-lg pr-2 pl-2 text-caption font-bold tracking-wide',
      },
      kind: {
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'toned',
      size: 'sm',
    },
  },
)

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  itemEnd?: React.ReactNode
}

export const Button = ({
  kind,
  type,
  children,
  className,
  itemEnd,
  size = 'sm',
  variant = 'toned',
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      type={(type ?? (!asChild && 'button')) || undefined}
      className={cn(buttonVariants({ variant, size, kind }), className)}
      {...props}>
      <Slottable>{children}</Slottable>
      <span
        data-slot="button-item"
        className="-mr-1 ml-auto pl-1">
        {itemEnd}
      </span>
    </Comp>
  )
}
