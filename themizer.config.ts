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
          50: '#fffbf4',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          900: '#1f1402',
          950: '#100a01',
        },
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#5751FC',
          700: '#4f46e5',
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
      base: [{ dark: colors.amber[950] }, colors.amber[50]],
      neutral: [{ dark: colors.amber[50] }, alpha(colors.amber[950], alphas[80])],
      main: {
        DEFAULT: colors.amber[500],
        secondary: [{ dark: colors.amber[400] }, colors.amber[600]],
      },
      accent: {
        DEFAULT: colors.indigo[500],
        secondary: [{ dark: colors.indigo[400] }, colors.indigo[600]],
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
      sm: [{ desktop: sizing[16] }, sizing[8]],
      md: [{ desktop: sizing[24] }, sizing[16]],
    },

    transitionTimingFunction: {
      bounce: [{ motion: transitions.bounce }],
      ease: [{ motion: transitions.ease }],
    },
  }),
)
