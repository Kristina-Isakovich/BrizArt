import styled from 'styled-components'
import { COLORS, TEXT_SIZE } from 'styles-constants'

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: ${TEXT_SIZE.header};
  font-weight: 500;
  & .header__item_mobile {
    display: none;
  }
  & > *:not(:last-child) {
    margin-right: 4rem;
  }
  & > a {
    margin-bottom: -1rem;
    padding-bottom: 1rem;
    position: relative;
    transition: .5s;
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      width: 0;
      background-color: ${COLORS.accent};
      bottom: 0;
      left: 50%;
      transition: width .3s ease-in-out;
      transform: translate(-50%, 0);
    }
    &:hover {
      color: ${COLORS.accent};
      &::after {
        width: 4rem;
      }
    }
  }
  
  @media (max-width: 1000px) {
    & .header__item_mobile {
      display: inline;
    }
    & .header__btn {
      display: none;
    }
  }
  @media (max-width: 768px) {
    font-size: 3.2rem;
    flex-direction: column;
    padding: 14rem 0 0 0 ;
    overflow: auto;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: -140%;
    transition: all .3s ease 0s;
    background-color: ${COLORS.light};
    &.active {
      top: 0;
    }
    & > *:not(:last-child) {
      margin: 0 0 3rem 0;
    }
  }
`
