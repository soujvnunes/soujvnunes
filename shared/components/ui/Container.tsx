import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { theme } from '@/themizer.config'

import { cn } from '@/shared/utils/shadcn'

const containerVariants = cva('', {
  variants: {
    contentType: {
      grid: '',
      flex: '',
    },
    disableContentCentering: {
      false: '',
    },
    disableLayoutCentering: {
      false: 'container mx-auto',
    },
    disableContentBetween: {
      false: '',
    },
    disableFullHeight: {
      false: '',
    },
    subtractMarginal: {
      false: '',
    },
    layoutSpacing: {
      y: 'py-margin',
      x: 'px-margin',
      true: 'p-margin',
    },
  },
  compoundVariants: [
    {
      disableContentBetween: false,
      disableContentCentering: false,
      className: 'justify-between',
    },
    {
      disableFullHeight: false,
      subtractMarginal: true,
      className: 'min-h-(--min-h)',
    },
    {
      disableFullHeight: false,
      subtractMarginal: false,
      className: 'min-h-dvh',
    },
    {
      contentType: 'grid',
      disableContentCentering: false,
      className: 'grid place-items-center',
    },
    {
      contentType: 'flex',
      disableContentCentering: false,
      className: 'flex items-center justify-center',
    },
  ],
})
const minHStyle = {
  '--min-h': `calc(100dvh - ${theme.aliases.spacing.header})`,
}

export const Container = ({
  style,
  asChild,
  className,
  contentType = 'grid',
  layoutSpacing,
  subtractMarginal = false,
  disableFullHeight = false,
  disableContentBetween = false,
  disableLayoutCentering = false,
  disableContentCentering = false,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean
  }) => {
  const Component = asChild ? Slot : 'div'

  return (
    <Component
      style={{
        ...(subtractMarginal ? minHStyle : {}),
        ...style,
      }}
      className={cn(
        containerVariants({
          contentType,
          layoutSpacing,
          subtractMarginal,
          disableFullHeight,
          disableContentBetween,
          disableLayoutCentering,
          disableContentCentering,
        }),
        className,
      )}
      {...props}
    />
  )
}
