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
          5: '#fffbf4',
          1000: '#1f1402',
          1050: '#100a01',
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
      base: [{ dark: colors.amber[1050] }, colors.amber[5]],
      neutral: [{ dark: colors.amber[5] }, alpha(colors.amber[1050], alphas[80])],
      main: {
        DEFAULT: 'var(--color-amber-500)',
        secondary: [{ dark: 'var(--color-amber-400)' }, 'var(--color-amber-600)'],
      },
      accent: {
        DEFAULT: 'var(--color-indigo-500)',
        secondary: [{ dark: 'var(--color-indigo-400)' }, 'var(--color-indigo-600)'],
      },
      surface: {
        DEFAULT: ''
      }
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
