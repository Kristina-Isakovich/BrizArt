import styled from 'styled-components'
// @ts-ignore
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
  & .footer__logo {
    width: 5rem;
    & img {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    font-size: ${TEXT_SIZE.minText};
  }
`
