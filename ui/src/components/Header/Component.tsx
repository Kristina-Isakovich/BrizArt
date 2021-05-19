import React from 'react'
import { StyledHeader, StyledWrapper } from './styles'
import Logo from 'img/Logo.png'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Link to='/'><img src={Logo} alt='Logo' height='50' width='170'/></Link>
      <StyledWrapper>
        <Link to='/'>Главная</Link>
        <a href={'#lattices'}>Решетки</a>
        <a href={'#contacts'}>Контакты</a>
        <Link to='/news'>Новости</Link>
        <Button />
      </StyledWrapper>
    </StyledHeader>
  )
}
