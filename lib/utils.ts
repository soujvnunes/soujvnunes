import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const extendedTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['headline'],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return extendedTwMerge(clsx(inputs))
}
