import React from 'react'
import { StylesAdvantages, StylesItem } from './styles'
import { advantages } from './advantages.service'

export const Advantage: React.FC = () => {
  return (
    <StylesAdvantages>
      {advantages.map(({img, title}) => (
        <StylesItem key={img}>
          <div className='advantage__icon'>
            <img src={img} alt={img}/>
          </div>
          <p>{title}</p>
        </StylesItem>
      ))}
    </StylesAdvantages>
  )
}
