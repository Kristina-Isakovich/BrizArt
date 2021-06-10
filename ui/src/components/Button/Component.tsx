import React from 'react'
import { StyledButton } from './styles'

export const Button: React.FC = (props) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  )
}
