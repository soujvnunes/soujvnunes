import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export function Headline({
  className,
  asChild,
  ...props
}: React.ComponentProps<'h1'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'h1'

  return (
    <Comp
      className={cn('text-headline text-balance text-main', className)}
      {...props}
    />
  )
}

export function Subtitle({
  className,
  asChild,
  ...props
}: React.ComponentProps<'p'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'p'

  return (
    <Comp
      className={cn('text-subtitle leading-[1.75] text-balance', className)}
      {...props}
    />
  )
}
