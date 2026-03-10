import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const extendedTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['headline', 'main-secondary'],
    },
  },
})

export const cn = (...inputs: ClassValue[]) => extendedTwMerge(clsx(inputs))
