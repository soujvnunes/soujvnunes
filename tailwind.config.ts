import type { Config } from 'tailwindcss'
import { theme } from './themizer.config'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: theme.aliases.colors.main,
        ground: {
          fore: theme.aliases.colors.ground.fore,
          back: theme.aliases.colors.ground.back,
        },
      },
      fontSize: {
        headline: theme.aliases.typography.headline,
        title: theme.aliases.typography.title,
        subtitle: theme.aliases.typography.subtitle,
        body: theme.aliases.typography.body,
        caption: theme.aliases.typography.caption,
      },
      spacing: {
        padding: theme.aliases.grid.padding,
        margin: theme.aliases.grid.margin,
      },
      fontFamily: {
        sans: theme.tokens.typeface.sans,
      },
      transitionTimingFunction: {
        bounce: theme.aliases.animations.bounce,
        ease: theme.aliases.animations.ease,
      },
      opacity: theme.tokens.alphas,
    },
  },
} satisfies Config
