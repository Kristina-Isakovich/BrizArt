import React from 'react'
import { StylesWrapper, StylesContacts, StylesLink } from './styles'
import { contacts } from './contacts.service'

export const Contacts: React.FC = () => {
  return (
    <StylesWrapper>
      <StylesContacts>
        {contacts.map(({img, title, link}) => (
          <StylesLink key={img} href={link}>
            <div className='contact__icon'>
              <img src={img} alt={img} />
            </div>
            <p>{title}</p>
          </StylesLink>
        ))}
      </StylesContacts>
    </StylesWrapper>
  )
}
