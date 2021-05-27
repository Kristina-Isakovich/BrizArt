import { createGlobalStyle } from 'styled-components'
import { COLORS } from 'styles-constants'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, sans-serif;
    background-color: ${COLORS.background};
    line-height: 1.3;
  }
  :root {
    font-size: 62.5%;
    
    @media (max-width: 768px) {
      font-size: 8px;
    }
  }
  a {
    color: ${COLORS.mainText};
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
  p {
    margin-bottom: 0;
  }
  .container {
    max-width: 100rem;
    margin: 0 auto;
    padding: 0 3.5rem;
    background-color: ${COLORS.light};
    
    @media (max-width: 1024px) {
      max-width: none;
    }
    @media (max-width: 768px) {
      padding: 0 2rem;
    }
  }
`
