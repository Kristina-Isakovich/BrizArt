import styled from 'styled-components'
import { COLORS, TEXT_SIZE } from 'styles-constants'

export const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  color: ${COLORS.mainText};
  background-color: ${COLORS.accent};
  border-radius: 25px;
  font-size: ${TEXT_SIZE.text};
`
