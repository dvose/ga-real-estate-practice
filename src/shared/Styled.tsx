// collection of styled elements
import styled, { createGlobalStyle, css } from "styled-components";
import { media } from "./styles/Constants";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f1f5f8;
  }
`;

export const PageGutter = css`
  max-width: 100%;
  ${media.xxl`
    padding-left: 144px;
    padding-right: 144px;
  `}
  ${media.xl`
    padding-left: 144px;
    padding-right: 144px;
  `}
  ${media.lg`
    padding-left: 144px;
    padding-right: 144px;
  `}

  ${media.md`
    padding-left: 60px;
    padding-right: 60px;
  `}

  ${media.sm`
    padding-left: 20px;
    padding-right: 20px;
  `}
`;

export const PageContainer = styled.div`
  background-color: transparent;
  ${PageGutter}
`;

export const Button = styled.button`
  color: white;
  background-color: rgba(87, 131, 219, 1);
  border: 1px solid rgba(126, 162, 236, 1);
  border-radius: 4px;
  padding: 2px 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(87, 131, 219, .8);
  }
`;