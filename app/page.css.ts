import { css } from '@linaria/core'
import { styled } from '@linaria/react'
import theme from '../themizer.config'

export const Page = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`

export const Main = styled.main`
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 800px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${theme.aliases.grid.margin} ${theme.aliases.grid.padding};
`

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: ${theme.aliases.grid.padding};

  h1 {
    max-width: 320px;
    font-size: ${theme.aliases.typography.headline};
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.06em;
    text-wrap: balance;
    color: ${theme.aliases.colors.ground.fore};
  }

  p {
    max-width: 440px;
    font-size: ${theme.aliases.typography.subtitle};
    line-height: 1.75;
    text-wrap: balance;
    color: ${theme.aliases.colors.ground.fore};
  }

  a {
    font-weight: 500;
    color: ${theme.aliases.colors.main};
  }
`

export const Ctas = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 440px;
  gap: ${theme.tokens.units.rem[1]};
  font-size: ${theme.aliases.typography.caption};

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${theme.tokens.units.px[40]};
    padding: 0 ${theme.tokens.units.rem[1]};
    border-radius: 128px;
    border: 1px solid transparent;
    transition: ${theme.aliases.animations.ease};
    cursor: pointer;
    width: fit-content;
    font-weight: 500;
  }
`

export const PrimaryLink = styled.a`
  background: ${theme.aliases.colors.ground.fore};
  color: ${theme.aliases.colors.ground.back};
  gap: ${theme.tokens.units.rem[0.5]};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${theme.aliases.colors.main};
      border-color: transparent;
    }
  }
`

export const SecondaryLink = styled.a`
  border-color: ${theme.tokens.palette.amber.dark};
  color: ${theme.aliases.colors.ground.fore};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: ${theme.tokens.palette.amber.lighter};
      border-color: transparent;
    }
  }
`

export const logo = css`
  @media (prefers-color-scheme: dark) {
    filter: invert();
  }
`
