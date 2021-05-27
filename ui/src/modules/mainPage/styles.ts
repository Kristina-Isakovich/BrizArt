import styled from 'styled-components'
import { TEXT_SIZE } from 'styles-constants'
import Main from 'img/Main.png'

export const StylesSection = styled.section`
  background-image: url(${Main});
  min-height: 520px;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding: 40px 15px;
  margin-bottom: 10rem;
`

export const StylesH1 = styled.h1`
  font-weight: 900;
  font-size: ${TEXT_SIZE.mainHeading};
  color: #d4dcd8;
  width: 450px;
  text-align: center;
  letter-spacing: 0.1em;
  & span:not(:last-child) {
    display: block;
    position: relative;
    padding-bottom: 33px;
    margin-bottom: 27px;
    &:after {
      content: "";
      position: absolute;
      height: 6px;
      width: 6px;
      border-radius: 50%;
      background-color: #d4dcd8;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
  @media (max-width: 426px) {
    font-size: 20px;
  }
`

export const StylesContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
  & > img {
    height: auto;
  }
  &:last-child {
    margin-bottom: 7rem;
  }
`

export const StylesH2 = styled.h2`
  font-size: ${TEXT_SIZE.heading};
  font-weight: 600;
  margin-bottom: 5rem;
  align-self: center;
`
