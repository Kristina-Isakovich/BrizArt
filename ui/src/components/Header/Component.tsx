import React, { useState, useEffect } from 'react'
import { StyledHeader } from './styles'
// @ts-ignore
import Logo from 'img/Logo.png'
import { HashLink } from 'react-router-hash-link'
import { Menu } from './Menu'

export const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [header, setHeader] = useState('')

  const toggleMenuActive = () => window.innerWidth <= 768 ? setMenuActive(!menuActive) : null

  const listenScrollEvent = () => {
    window.scrollY >= 10
      ? setHeader('shadow')
      : setHeader('')
  }

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = menuActive ? 'hidden' : 'auto'
  }, [menuActive])

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () =>
      window.removeEventListener('scroll', listenScrollEvent)
  }, [])

  return (
    <StyledHeader className={header}>
      <HashLink to='/#top' className='header__logo' smooth>
        <img src={Logo} alt='Logo'/>
      </HashLink>

      <div className={menuActive ? 'header__burger active' : 'header__burger'}
        onClick={toggleMenuActive}>
        <span/>
      </div>

      <Menu menuActive={menuActive} toggleMenuActive={toggleMenuActive} />
    </StyledHeader>
  )
}
