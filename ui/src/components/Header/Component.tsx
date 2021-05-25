import React, { useState, useEffect } from 'react'
import { StyledHeader, StyledMenu } from './styles'
import Logo from 'img/Logo.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Button } from '../Button'

export const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <StyledHeader>
      <HashLink to='/#top' className='header__logo' smooth><img src={Logo} alt='Logo'/></HashLink>
      <div className={menuActive ? 'header__burger active' : 'header__burger'}
           onClick={() => setMenuActive(!menuActive)}>
        <span></span>
      </div>
      <StyledMenu className={menuActive ? 'active' : null}>
        <HashLink smooth to='/#top' onClick={() => setMenuActive(!menuActive)}>Главная</HashLink>
        <HashLink smooth to='/#lattices' onClick={() => setMenuActive(!menuActive)}>Решетки</HashLink>
        <HashLink smooth to='/#contacts' onClick={() => setMenuActive(!menuActive)}>Контакты</HashLink>
        <HashLink smooth to='/#order' className='header__item_mobile' onClick={() => setMenuActive(!menuActive)}>Заказать</HashLink>
        <HashLink to='/news' onClick={() => setMenuActive(!menuActive)}>Новости</HashLink>
        <Button className='header__btn'/>
      </StyledMenu>
    </StyledHeader>
  )
}
