import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

export const Headline = ({
  className,
  asChild,
  ...props
}: React.ComponentProps<'h1'> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : 'h1'

  return (
    <Comp
      className={cn('text-headline font-bold text-balance text-main', className)}
      {...props}
    />
  )
}

export const Subtitle = ({
  className,
  asChild,
  ...props
}: React.ComponentProps<'p'> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : 'p'

  return (
    <Comp
      className={cn('text-subtitle leading-[1.75] text-balance', className)}
      {...props}
    />
  )
}
