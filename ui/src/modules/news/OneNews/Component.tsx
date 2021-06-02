import React from 'react'
import { INews } from '../news.service'
import { StylesNews } from './styles'

export const OneNews: React.FC<INews> = ({id, img, title, text}) => (
  <StylesNews key={id}>
    <img className='item__img' src={img} />
    <h1 className='item__title'>{title}</h1>
    <div className='item__text'>{text}</div>
  </StylesNews>
)
