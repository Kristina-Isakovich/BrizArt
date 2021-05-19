import React from 'react'
import { StylesAdvantages, StylesItem } from './styles'
import { advantages } from './advantages.service'

export const Advantage: React.FC = () => {
  return (
    <StylesAdvantages>
      {advantages.map(({img, title}) => (
        <StylesItem key={img}>
          <img src={img} alt={img} height='50'/>
          <p>{title}</p>
        </StylesItem>
      ))}
    </StylesAdvantages>
  )
}
