import React from 'react'
import { StyledMenu } from './styles'
import { HashLink } from 'react-router-hash-link'
import { Button } from '../../Button'

export const Header: React.FC = ({menuActive, setMenuActive}) => {
    return (
        <StyledMenu className={menuActive ? 'active' : null}>
            <HashLink smooth to='/#top' onClick={() => setMenuActive(!menuActive)}>Главная</HashLink>
            <HashLink smooth to='/#lattices' onClick={() => setMenuActive(!menuActive)}>Решетки</HashLink>
            <HashLink smooth to='/#contacts' onClick={() => setMenuActive(!menuActive)}>Контакты</HashLink>
            <HashLink smooth to='/#order' className='header__item_mobile' onClick={() => setMenuActive(!menuActive)}>Заказать</HashLink>
            <HashLink to='/news' onClick={() => setMenuActive(!menuActive)}>Новости</HashLink>
            <Button className='header__btn'/>
        </StyledMenu>
    )
}
