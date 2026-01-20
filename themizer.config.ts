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
      palette: { green: 'oklch(40.3% 0.1016 149.4)', cream: 'oklch(95.5% 0.0170 76.1)' },
      spacing: {
        2: '0.125rem',
        4: '0.25rem',
        8: '0.5rem',
        12: '0.75rem',
        16: '1rem',
        24: '1.5rem',
        40: '2.5rem',
        64: '4rem',
        104: '6.5rem',
        440: '27.5rem',
      },
      // Full control properties
      alphas: { 100: '100%', 80: '80%', 60: '60%' },
      transitions: {
        bounce: '200ms cubic-bezier(0.5, -0.5, 0.25, 1.5)',
        ease: '200ms cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  ({ palette, alphas, spacing, transitions }) => ({
    colors: {
      main: palette.green.light,
      ground: { fore: alpha(palette.green.darkest, alphas[80]), back: palette.cream.base },
    },

    typography: {
      headline: [{ desktop: spacing[64] }, spacing[40]],
      title: [{ desktop: spacing[40] }, spacing[24]],
      subtitle: [{ desktop: spacing[24] }, spacing[16]],
      body: spacing[16],
      caption: spacing[12],
    },

    grid: {
      padding: [{ desktop: spacing[16] }, spacing[8]],
      margin: [{ desktop: spacing[24] }, spacing[16]],
    },

    animations: { bounce: [{ motion: transitions.bounce }], ease: [{ motion: transitions.ease }] },
  }),
)
