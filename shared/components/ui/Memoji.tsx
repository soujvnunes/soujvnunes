import { cn } from '@/shared/utils/shadcn'

export const Memoji = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn('inline-flex h-32 w-32 items-center justify-center overflow-hidden', className)}
    {...props}
  />
)
