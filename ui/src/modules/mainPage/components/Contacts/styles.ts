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
  transition: all .3s ease-in-out;
  & .contact__icon {
    margin: 0 auto;
    margin-bottom: 2.5rem;
    width: 5rem;
    & img {
      width: 100%;
    }
  }
  @keyframes swing {
    15% {
      transform: translateX(9px);
    }
    30% {
      transform: translateX(-9px);
    }
    40% {
      transform: translateX(6px);
    }
    50% {
      transform: translateX(-6px);
    }
    65% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  &:hover {
    & img {
      animation: swing 0.6s ease-in-out;
      animation-iteration-count: 1;
    }
    color: ${COLORS.accent};
  }
`
