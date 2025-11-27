import { css } from '@linaria/core'
import { theme } from '../themizer.config'

export const globals = css`
  :global() {
    html,
    body {
      max-width: 100vw;
      overflow-x: hidden;
    }

    html {
      box-sizing: border-box;
    }

    body {
      color: ${theme.aliases.colors.ground.fore};
      background: ${theme.aliases.colors.ground.back};
      font-family: ${theme.tokens.typeface.sans};
      font-size: ${theme.aliases.typography.body};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    * {
      box-sizing: inherit;
      padding: 0;
      margin: 0;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`
