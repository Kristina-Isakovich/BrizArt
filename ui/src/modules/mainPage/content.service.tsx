import React from 'react'
import { Advantage } from './components/Advantage'
import { Lattices } from './components/Lattices'
import { Contacts } from './components/Contacts'
import { Order } from './components/Order'
import Dimensions from 'img/Dimensions.png'
import Application from 'img/Application.png'

export interface IRoute {
  id?: string
  title: string
  component: React.FC | JSX.Element
}

export const content: Array<IRoute> = [
  {
    title: 'Преимущества',
    component: <Advantage />,
  },
  {
    title: 'Размеры',
    component: <img src={Dimensions} alt='Dimensions' height='520'/>,
  },
  {
    title: 'Применение',
    component: <img src={Application} alt='Application' height='520'/>,
  },
  {
    id: 'lattices',
    title: 'Решетки',
    component: <Lattices />,
  },
  {
    title: 'ЗАКАЗ',
    component: <Order />,
  },
  {
    id: 'contacts',
    title: 'КОНТАКТЫ',
    component: <Contacts />,
  },
]
