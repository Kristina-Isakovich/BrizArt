import styled from 'styled-components'
import { COLORS, TEXT_SIZE } from 'styles-constants'

export const StylesContacts = styled.div`
  display: flex;
  font-weight: 500;
  font-size: ${TEXT_SIZE.text};
  justify-content: space-between;
  
  & > div:not(:last-child) {
    margin-right: 4rem;
  }
`

export const StylesLink = styled.a`
  cursor: pointer;
  display: block;
  text-align: center;  
  & img {
    margin-bottom: 2.5rem;
  }
  &:hover {
    color: ${COLORS.accent};
  }
`
