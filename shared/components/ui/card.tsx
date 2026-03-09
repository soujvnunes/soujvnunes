import { cn } from '../../utils/shadcn'

export const Card = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <div
    className={cn(
      'rounded-2xl bg-white p-2 shadow-lg shadow-amber-800/5 dark:border-t dark:border-t-amber-500/10 dark:bg-amber-900/20 dark:bg-linear-to-tl dark:from-amber-900/80 dark:shadow-none dark:backdrop-blur-2xl',
      className,
    )}
    {...props}
  />
)
