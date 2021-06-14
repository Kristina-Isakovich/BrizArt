import React from 'react'
import { StyledMenu } from './styles'
import { HashLink } from 'react-router-hash-link'
import { Button } from '../../Button'
import { menuItems } from './menuItems.service'

interface IMenuProps {
    menuActive: boolean
    toggleMenuActive: () => void
}

export const Menu: React.FC<IMenuProps> = ({menuActive, toggleMenuActive}) => {
  return (
    <StyledMenu className={menuActive ? 'active' : null}>
      {menuItems.map(({to, title}) => (
        <HashLink key={to} smooth to={to} onClick={toggleMenuActive}>{title}</HashLink>
      ))}
      <Button><HashLink smooth to={'/#order'}>ЗАКАЗАТЬ</HashLink></Button>
    </StyledMenu>
  )
}
