import styled, { createGlobalStyle } from 'styled-components'
import { COLORS } from 'styles-constants'

export const StyledContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 3.5rem;
  background-color: white;
  @media (max-width: 1024px) {
    max-width: none;
  }
`

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, sans-serif;
    background-color: ${COLORS.background};
    line-height: 1.3;
  }
  :root {
    font-size: 62.5%;
  }
  a {
    color: ${COLORS.mainText};
    text-decoration: none;
  }
  p {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    :root {
      font-size: 7px;
    }
   body.lock {
     overflow: hidden;
   }
  }
`
