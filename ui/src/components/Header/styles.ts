import styled from 'styled-components'
import { COLORS } from 'styles-constants'

export const StyledHeader = styled.header`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 3.5rem;
  background-color: ${COLORS.light};
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 5;
  &.shabow {
    box-shadow: 0px 10px 8px -8px rgba(50, 50, 50, 0.75);
  }
  & .header__logo {
    height: 5rem;
    z-index: 6;
    & img {
      height: 100%;
    }
  }
  & .header__burger {
    display: none;
  }
  @media (max-width: 1024px) {
    max-width: none;
  }
  @media (max-width: 768px) {
    padding: 0 2rem;
    & .header__burger {
      cursor: pointer;
      display: block;
      position: relative;
      width: 30px;
      height: 20px;
      z-index: 6;
    }
    & .header__burger:after,
    & .header__burger:before {
      content: '';
      background-color: black;
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      transition: all .3s ease 0s;
    }
    & .header__burger:before {
      top: 0;
    }
    & .header__burger:after {
      bottom: 0;
    }
    & .header__burger span {
      background-color: black;
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      top: 9px;
      transition: all .3s ease 0s;
    }
    & .header__burger.active:before {
      transform: rotate(45deg);
      top: 9px;
    }
    & .header__burger.active:after {
      transform: rotate(-45deg);
      bottom: 9px;
    }
    & .header__burger.active span {
      transform: scale(0);
    }
  }
`
