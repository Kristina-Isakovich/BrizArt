import styled from 'styled-components'
import { TEXT_SIZE } from 'styles-constants'

export const StyledFooter = styled.footer`
  display: flex;
  padding-bottom: 1rem;
  align-items: center;
  justify-content: space-between;
  font-size: ${TEXT_SIZE.header};
  font-weight: 300;
  & > *:not(:last-child) {
    margin-right: 1rem;
  }
  & p {
    text-align: center;
  }
`
