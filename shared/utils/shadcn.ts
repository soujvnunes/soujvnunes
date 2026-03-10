import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const extendedTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['headline', 'title', 'subtitle', 'body', 'caption'],
      color: ['main-secondary', 'neutral'],
    },
  },
})

export const cn = (...inputs: ClassValue[]) => extendedTwMerge(clsx(inputs))
