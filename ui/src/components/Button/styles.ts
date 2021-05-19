import styled from 'styled-components'
import { COLORS, TEXT_SIZE } from 'styles-constants'

export const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  color: ${COLORS.mainText};
  background-color: ${COLORS.accent};
  width: 20rem;
  height: 5rem;
  padding: 1rem;
  border-radius: 25px;
  font-size: ${TEXT_SIZE.text};
  letter-spacing: 0.1em;
  &:hover {
    background-color: ${COLORS.accentDark};
    transition: 1s;
  }
`
