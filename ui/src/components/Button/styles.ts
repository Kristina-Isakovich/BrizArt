import styled from 'styled-components'
import { COLORS, TEXT_SIZE } from 'styles-constants'

export const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  color: ${COLORS.text};
  background-color: ${COLORS.accent};
  height: 5rem;
  padding: 1rem 3.7rem;
  border-radius: 25px;
  font-size: ${TEXT_SIZE.text};
  letter-spacing: 0.1em;
  transition: all .3s ease-in-out;
  &:active {
    transform: scale(.8);
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`
