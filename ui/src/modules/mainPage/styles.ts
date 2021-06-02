import styled from 'styled-components'
import { TEXT_SIZE } from 'styles-constants'

export const StylesSection = styled.section`
  position: relative;
  margin-bottom: 10rem;
  & img {
    width: 100%;
  }
  
  @media (max-width: 426px) {
    margin-bottom: 7rem;
  }
`

export const StylesH1 = styled.h1`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, 0);
  font-weight: 900;
  font-size: ${TEXT_SIZE.mainHeading};
  color: #d4dcd8;
  max-width: 450px;
  text-align: center;
  letter-spacing: 0.1em;
  
  @media (max-width: 768px) {
    top: 35px;
  }
  @media (max-width: 620px) {
    font-size: 25px;
    top: 20px;
  }
  @media (max-width: 550px) {
    font-size: 20px;
  }
  @media (max-width: 426px) {
    font-size: 15px;
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

  @media (max-width: 426px) {
    margin-bottom: 7rem;
  }
`

export const StylesH2 = styled.h2`
  font-size: ${TEXT_SIZE.heading};
  font-weight: 600;
  margin-bottom: 5rem;
  align-self: center;

  @media (max-width: 426px) {
    margin-bottom: 4rem;
  }
`
