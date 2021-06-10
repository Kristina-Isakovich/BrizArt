import styled from 'styled-components'
// @ts-ignore
import { COLORS, TEXT_SIZE } from 'styles-constants'

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 5rem;
  width: 60rem;
  
  @media (max-width: 540px) {
    width: 50rem;
  }
  @media (max-width: 460px) {
    width: 45rem;
  }
  @media (max-width: 400px) {
    width: 40rem;
  }
  
  & .form__container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    & .form__lattices {
      width: 40rem;
      cursor: pointer;
      
      @media (max-width: 540px) {
        width: 30rem;
      }
      @media (max-width: 460px) {
        width: 25rem;
      }
      @media (max-width: 400px) {
        width: 20rem;
      }
    }
    & .form__amount::-webkit-outer-spin-button,
    & .form__amount::-webkit-inner-spin-button {
      display: none;
      -webkit-appearance: none;
      margin: 0;
    }
    & > *:nth-child(2) {
      width: 7.5rem;
    }
    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  }
  & .form__plus {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
  & .form__item {
    width: 100%;
    border: transparent;
    border-bottom: 1px solid ${COLORS.dark};
    padding: 1px 17px;
    font-weight: 300;
    font-size: ${TEXT_SIZE.text};
    letter-spacing: 0.1em;
    color: #808080;
    opacity: .6;
    
    &:focus {
      border: transparent;
      outline: 2px solid ${COLORS.accent};
    }
  }
  
  & .form__title {
    font-weight: bold;
    font-size: ${TEXT_SIZE.text};
    letter-spacing: 0.1em;
    color: #262626;
    opacity: .6;
    text-align: center;
    margin-bottom: 1rem;
  }
  & .form__data {
    margin-bottom: 5rem;
    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  & .form__error {
      color: red;
      padding-left: 17px;
    }
  & .form_submit {
    align-self: center;
    &:disabled {
    cursor: not-allowed;
    }
  }
`
