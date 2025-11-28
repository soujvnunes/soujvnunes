import themizer from 'themizer'

const alpha = (color: string, percentage: string) =>
  `color-mix(in srgb, ${color} ${percentage}, transparent)`

export const theme = themizer(
  {
    prefix: 'theme',
    medias: {
      desktop: '(width >= 1024px)',
      dark: '(prefers-color-scheme: dark)',
      motion: '(prefers-reduced-motion: no-preference)',
    },
    tokens: {
      palette: {
        green: 'oklch(40.3% 0.1016 149.4)',
        cream: 'oklch(95.5% 0.0170 76.1)',
      },
      units: {
        rem: [0, 0.25, 4],
        px: [0, 4, 64],
      },
      alphas: {
        100: '100%',
        80: '80%',
        60: '60%',
      },
      transitions: {
        bounce: '200ms cubic-bezier(0.5, -0.5, 0.25, 1.5)',
        ease: '200ms cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      typeface: {
        sans: "'sofia-pro, sans-serif'",
      },
    },
  },
  ({ palette, alphas, units, transitions }) => ({
    colors: {
      main: palette.green.light,
      ground: {
        fore: alpha(palette.green.darkest, alphas[80]),
        back: palette.cream.base,
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
