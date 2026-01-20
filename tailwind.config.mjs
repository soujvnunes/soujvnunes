import { theme } from './themizer.config.ts'

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        main: theme.aliases.colors.main,
        ground: { fore: theme.aliases.colors.ground.fore, back: theme.aliases.colors.ground.back },
      },
      fontSize: {
        headline: theme.aliases.typography.headline,
        title: theme.aliases.typography.title,
        subtitle: theme.aliases.typography.subtitle,
        body: theme.aliases.typography.body,
        caption: theme.aliases.typography.caption,
      },
      spacing: { padding: theme.aliases.grid.padding, margin: theme.aliases.grid.margin },
      transitionTimingFunction: {
        bounce: theme.aliases.animations.bounce,
        ease: theme.aliases.animations.ease,
      },
      opacity: theme.tokens.alphas,
    },
  },
}
