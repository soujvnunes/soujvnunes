import { cn } from '../../utils/shadcn'

export const Card = ({ className, ...props }: React.ComponentProps<'div'>) => (
  <article
    className={cn(
      'rounded-2xl bg-white p-2 shadow-lg not-dark:shadow-amber-800/5 dark:border-t dark:border-t-amber-500/10 dark:bg-amber-1000/20 dark:bg-linear-to-tl dark:from-amber-1000/80 dark:to-indigo-950/40 dark:backdrop-blur-xs',
      className,
    )}
    {...props}
  />
)
