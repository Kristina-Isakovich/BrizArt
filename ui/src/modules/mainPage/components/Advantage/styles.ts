import styled from 'styled-components'
import { TEXT_SIZE } from 'styles-constants'

export const StylesAdvantages = styled.div`
  display: flex;
  font-weight: 600;
  font-size: ${TEXT_SIZE.minText};
  & > div:not(:last-child) {
    margin-right: 3rem;
  }
  
  @media (max-width: 620px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    align-items: center;
    & > div:not(:last-child) {
      margin: 0;
    }
  }
`

export const StylesItem = styled.div`
  text-align: center;
  & .advantage__icon {
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 5rem;
    & img {
      width: 100%;
    }
  }

  @media (max-width: 620px) {
    margin: 0 auto;
    & p {
      max-width: 164px;
    }
  }
`
