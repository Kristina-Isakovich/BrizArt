import styled from 'styled-components'
import { COLORS, TEXT_SIZE } from 'styles-constants'

export const StyledContainer = styled.div`
  position: relative;
  margin-bottom: 3rem;
  & .background {
    display: block;
    width: 100%;
  }
  & .ellipse {
    display: block;
    position: absolute;
    bottom: 3.5rem;
    left: 6.5rem;
    width: 26%;

    @media (max-width: 540px) {
      left: 4rem;
      bottom: 2rem;
      width: 30%;
    }
    @media (max-width: 440px) {
      left: 3rem;
    }
  }
`

export const StyledTitles = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  min-height: 7rem;
  font-weight: bold;
  font-size: ${TEXT_SIZE.mainHeading};

  @media (max-width: 500px) {
    font-size: ${TEXT_SIZE.heading};
  }
  @media (max-width: 440px) {
    min-height: 5rem;
    font-size: ${TEXT_SIZE.text};
  }
  & p {
    display: flex;
    align-items: center;
    padding: 1rem;
  }
  & .name {
    justify-content: flex-end;
    padding-right: 10rem;
    color: ${COLORS.light};
    background-color: ${COLORS.dark};

    @media (max-width: 540px) {
      padding-right: 5rem;
    }
  }
  & .price {
    justify-content: center;
    background-color: ${COLORS.accent};
  }
`

export const StyledTable = styled.div`
  display: grid;
  grid-template-columns: 1.8fr repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  font-weight: 700;
  font-size: ${TEXT_SIZE.minText};
  & p {
    border: 1px solid ${COLORS.dark};
    text-align: center;
    padding: 1.5rem;
    
    @media (max-width: 600px) {
      padding: .8rem;
      font-size: 1.2rem;
    }
    @media (max-width: 453px) {
      font-size: 1rem;
    }
    @media (max-width: 380px) {
      font-size: .8rem;
    }
  }
`
