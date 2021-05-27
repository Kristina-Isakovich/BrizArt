import styled from 'styled-components'
import { COLORS, TEXT_SIZE } from 'styles-constants'

export const StylesWrapper = styled.div`
  @media (max-width: 640px) {
    align-self: center;
  }
`

export const StylesContacts = styled.div`
  display: flex;
  font-weight: 500;
  font-size: ${TEXT_SIZE.text};
  justify-content: space-between;
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: baseline;
    & > a:not(:last-child) {
      margin: 0 0 3rem 0;
    }
  }
`

export const StylesLink = styled.a`
  cursor: pointer;
  display: block;
  text-align: center;
  & .contact__icon {
    margin: 0 auto;
    margin-bottom: 2.5rem;
    width: 5rem;
    & img {
      transition: all .3s ease-in-out;
      width: 100%;      
    }
  }
  &:hover {
    & img {
      filter: invert(.6) sepia(2) saturate(4) brightness(1.1);
      transform: scale(1.1);
    }
    color: ${COLORS.accent};
  }

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    & .contact__icon {
      margin: 0 2.5rem 0 0;
      width: 3rem;
    }
  }
`
