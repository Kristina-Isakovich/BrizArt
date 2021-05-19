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
  padding: 40px;
  margin-bottom: 10rem;
`

export const StylesH1 = styled.h1`
  font-weight: 900;
  font-size: ${TEXT_SIZE.mainHeading};
  color: #d4dcd8;
  width: 450px;
  text-align: center;
  letter-spacing: 0.1em;
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
