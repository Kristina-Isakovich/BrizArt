import styled, { createGlobalStyle } from 'styled-components'
import { COLORS } from 'styles-constants'

export const StyledContainer = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 3.5rem;
  background-color: white;
`

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }
  :root {
    background-color: ${COLORS.background};
    font-size: 62.5%;
    font-family: Inter, sans-serif;
  }
  a {
    color: ${COLORS.mainText};
    text-decoration: none;
  }
`
