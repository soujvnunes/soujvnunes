import themizer from 'themizer'

/**
 * Example configuration for Themizer
 * Customize your design tokens below
 */

const alpha = (color: string, percentage: string) => `color-mix(in srgb, ${color} ${percentage}, transparent)`

export default themizer(
  {
    prefix: 'theme',
    medias: {
      desktop: '(width >= 1024px)',
      dark: '(prefers-color-scheme: dark)',
      motion: '(prefers-reduced-motion: no-preference)',
    },
    tokens: {
      // Auto-expand properties
      palette: {
        /* palette.amber.lightest // oklch(98.92% 0.0102 81.8)
         * palette.amber.lighter  // oklch(96.2% 0.059 95.617)
         * palette.amber.light    // oklch(82.8% 0.189 84.429)
         * palette.amber.base     // oklch(76.9% 0.188 70.08)
         * palette.amber.dark     // oklch(66.6% 0.179 58.318)
         * palette.amber.darker   // oklch(35% 0.0771 45.635)
         * palette.amber.darkest  // oklch(14.92% 0.0268 85.77)
         */
        amber: 'oklch(76.9% 0.188 70.08)',
      },
      units: {
        /* Generates values from 0 to 4 in 0.25 steps:
         * units.rem[0]           // '0rem'
         * units.rem[0.25]        // '0.25rem'
         * units.rem[0.5]         // '0.5rem'
         * units.rem[0.75]        // '0.75rem'
         * ...up to units.rem[4] // '4rem'
         */
        rem: [0, 0.25, 4],
        /* Generates values from 0 to 64 in 4px steps:
         * units.px[0]           // '0px'
         * units.px[4]           // '4px'
         * units.px[8]           // '8px'
         * ...up to units.px[64] // '64px'
         */
        px: [0, 4, 64],
      },

      // Full control properties
      alphas: {
        100: '100%',
        80: '80%',
        60: '60%',
      },
      transitions: {
        bounce: '200ms cubic-bezier(0.5, -0.5, 0.25, 1.5)',
        ease: '200ms cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  ({ palette, alphas, units, transitions }) => ({
    // Semantic aliases composed from tokens

    colors: {
      main: palette.amber.base,
      ground: {
        fore: [{ dark: palette.amber.lightest }, alpha(palette.amber.darkest, alphas[80])],
        back: [{ dark: palette.amber.darkest }, palette.amber.lightest],
      },
    },

    typography: {
      headline: [{ desktop: units.rem[4] }, units.rem[2.5]],
      title: [{ desktop: units.rem[2.5] }, units.rem[1.5]],
      subtitle: [{ desktop: units.rem[1.5] }, units.rem[1]],
      body: units.rem[1],
      caption: units.rem[0.75],
    },

    grid: {
      padding: [{ desktop: units.rem[2.5] }, units.rem[1.5]],
      margin: [{ desktop: units.rem[4] }, units.rem[2.5]],
    },

    animations: {
      bounce: [{ motion: transitions.bounce }],
      ease: [{ motion: transitions.ease }],
    },
  }),
)