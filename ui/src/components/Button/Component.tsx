import React from 'react'
import { StyledButton } from './styles'

interface IButtonProps {
  className?: string
  type?: 'submit'
}

export const Button: React.FC<IButtonProps> = ({className, type}) => {
  return (
    <StyledButton className={className} type={type}>ЗАКАЗАТЬ</StyledButton>
  )
}
