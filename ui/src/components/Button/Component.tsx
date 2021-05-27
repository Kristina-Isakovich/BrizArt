import React from 'react'
import { StyledButton } from './styles'

interface IButtonProps {
  className?: string
  type?: 'submit'
}

export const Button: React.FC<IButtonProps> = (props) => {
  return (
    <StyledButton className={props.className} type={props.type}>
      {props.children}
    </StyledButton>
  )
}
