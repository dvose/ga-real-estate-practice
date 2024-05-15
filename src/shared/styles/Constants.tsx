import { css } from 'styled-components'

const device = {
  xs: '400px',
  sm: '600px',
  md: '900px',
  lg: '1280px',
  xl: '1440px',
  xxl: '1920px',
}

export const media = {
  xs: (...args: any) => css`
    @media (max-width: ${device.xs}) {
      ${css([...args] as any)};
    }
  `,
  sm: (...args: any) => css`
    @media (max-width: ${device.sm}) {
      ${css([...args] as any)};
    }
  `,
  md: (...args: any) => css`
    @media (max-width: ${device.md}) {
      ${css([...args] as any)};
    }
  `,
  lg: (...args: any) => css`
    @media (max-width: ${device.lg}) {
      ${css([...args] as any)};
    }
  `,
  xl: (...args: any) => css`
    @media (max-width: ${device.xl}) {
      ${css([...args] as any)};
    }
  `,
  xxl: (...args: any) => css`
    @media (max-width: ${device.xxl}) {
      ${css([...args] as any)};
    }
  `,
}