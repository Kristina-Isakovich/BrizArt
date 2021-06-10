import React from 'react'
// @ts-ignore
import Logo from 'img/icons/logo-icon.svg'
import { StyledFooter } from './styles'

export const Footer: React.FC = () => (
  <StyledFooter>
    <div className='footer__logo'>
      <img src={Logo} alt="Logo" />
    </div>
    <p>ИП Роговенко Е.В. УНП 391565258<br/>
      BY27TECN30135890700000000010 в ОАО «ТЕХНОБАНК» код: TECNBY22</p>
    <div className='footer__logo'>
      <img src={Logo} alt="Logo" />
    </div>
  </StyledFooter>
)
