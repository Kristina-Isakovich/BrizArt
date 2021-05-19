import styled from 'styled-components'
import { TEXT_SIZE } from 'styles-constants'

export const StylesAdvantages = styled.div`
  display: flex;
  font-weight: 600;
  font-size: ${TEXT_SIZE.minText};
  
  & > div:not(:last-child) {
    margin-right: 3rem;
  }
`

export const StylesItem = styled.div`
  text-align: center;  
  & img {
    margin-bottom: 2rem;
  }
`
