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
      colors: {
        amber: {
          50: 'oklch(0.9892 0.0102 81.8)', // #fffbf4
          400: 'oklch(0.8369 0.1644 84.43)', // #fbbf24
          500: 'oklch(0.7686 0.1647 70.08)', // #f59e0b
          600: 'oklch(0.6658 0.1574 58.32)', // #d97706
          900: 'oklch(0.2008 0.0373 79.92)', // #1f1402
          950: 'oklch(0.1492 0.0268 85.77)', // #100a01
        },
        indigo: {
          400: 'oklch(0.6801 0.1583 276.93)', // #818cf8
          500: 'oklch(0.5854 0.2041 277.12)', // #6366f1
          600: 'oklch(0.5528 0.2443 276.36)', // #5751FC
          700: 'oklch(0.5106 0.2301 276.97)', // #4f46e5
        },
      },
      sizing: {
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
  ({ colors, alphas, sizing, transitions }) => ({
    colors: {
      main: {
        DEFAULT: colors.amber[500],
        secondary: [{ dark: colors.amber[400] }, colors.amber[600]],
      },
      accent: {
        DEFAULT: colors.indigo[500],
        secondary: [{ dark: colors.indigo[400] }, colors.indigo[600]],
      },
      ground: {
        back: [{ dark: colors.amber[950] }, colors.amber[50]],
        fore: [{ dark: colors.amber[50] }, alpha(colors.amber[950], alphas[80])],
      },
    },

    fontSize: {
      headline: [{ desktop: sizing[64] }, sizing[40]],
      title: [{ desktop: sizing[40] }, sizing[24]],
      subtitle: [{ desktop: sizing[24] }, sizing[16]],
      body: sizing[16],
      caption: sizing[12],
    },

    spacing: {
      padding: [{ desktop: sizing[16] }, sizing[8]],
      margin: [{ desktop: sizing[24] }, sizing[16]],
    },

    transitionTimingFunction: {
      bounce: [{ motion: transitions.bounce }],
      ease: [{ motion: transitions.ease }],
    },
  }),
)
