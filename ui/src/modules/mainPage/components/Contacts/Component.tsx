import React from 'react'
import {StylesContacts, StylesLink} from './styles'
import { contacts } from './contacts.service'

export const Contacts: React.FC = () => {
  return (
    <StylesContacts>
      {contacts.map(({img, title, link}) => (
        <StylesLink key={img} href={link}>
          <img src={img} alt={img} height='50'/>
          <p>{title}</p>
        </StylesLink>
      ))}
    </StylesContacts>
  )
}
