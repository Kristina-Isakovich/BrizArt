import styled from 'styled-components'
import { COLORS, TEXT_SIZE } from 'styles-constants'
import { Form } from 'antd'

export const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 40rem 7.5rem 2.5rem;
  grid-template-rows: repeat(1, 3rem) 15rem auto;
  grid-gap: 5rem 2rem;
  align-self: center;
  justify-content: space-between;
  margin-bottom: 5rem;
  width: 60rem;
  
  & .form__plus {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
  
  & .form_tel {
    grid-column-start: 2;
    grid-column-end: 4;
  } 
  & .form_text, .form_submit{
    grid-column-start: 1;
    grid-column-end: 4;
  }
  & .form_submit {
    justify-self: center;
  }
  & .form__item {
    width: 100%;
    border: transparent;
    border-bottom: 1px solid ${COLORS.dark};
  }
  & textarea {
    width: 100%;
    height: 15rem;
    padding: 1.5rem;
   }
  & > *:not(:last-child) {
    font-weight: 300;
    font-size: ${TEXT_SIZE.text};
    letter-spacing: 0.1em;
    color: ${COLORS.dark};
  }
`
