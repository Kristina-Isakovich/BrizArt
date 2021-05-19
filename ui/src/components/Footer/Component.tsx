import React from 'react'
import Logo from 'img/icons/logo-icon.svg'
import { StyledFooter } from './styles'

export const Footer: React.FC = () => (
  <StyledFooter>
    <img src={Logo} alt="Logo" />
    <p>ИП Роговенко Е.В. УНП 391565258<br/>
      BY27TECN30135890700000000010 в ОАО «ТЕХНОБАНК» код: TECNBY22</p>
    <img src={Logo} alt="Logo" />
  </StyledFooter>
)
