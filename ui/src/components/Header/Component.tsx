import React from 'react'
import { StyledHeader } from './styles'
import Logo from 'img/Logo.png'
import { Link } from 'react-router-dom'
import { Button } from '../Button'

export const Header: React.FC = () => {
    return (
        <StyledHeader>
          <Link to='/'><img src={Logo} alt='Logo' height='50' width='170'/></Link>
          <nav>
            <Link to='/'>Главная</Link>
            <Link to='#lattices'>Решетки</Link>
            <Link to='#contacts'>Контакты</Link>
            <Link to='/news'>Новости</Link>
          </nav>
          <Button />
        </StyledHeader>
    )
}
