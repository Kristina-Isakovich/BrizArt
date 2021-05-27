export interface IRoute {
  to: string
  title: string
}

export const menuItems: Array<IRoute> = [
  {
    to: '/#top',
    title: 'Главная',
  },
  {
    to: '/#lattices',
    title: 'Решетки',
  },
  {
    to: '/#contacts',
    title: 'Контакты',
  },
  {
    to: '/news',
    title: 'Новости',
  },
]
