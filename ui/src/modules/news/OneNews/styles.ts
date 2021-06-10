import styled from 'styled-components'
// @ts-ignore
import { TEXT_SIZE } from 'styles-constants'

export const StylesNews = styled.div`
  margin-bottom: 5rem;
  & .item__img {
    width: 100%;
    margin-bottom: 3rem;
  }
  & .item__title {
    font-weight: bold;
    font-size: ${TEXT_SIZE.titleNews};
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  & .item__text {
    text-indent: 1.5rem;
    font-weight: 500;
    font-size: ${TEXT_SIZE.header};
  }
`
