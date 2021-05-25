import advantage_1 from 'img/icons/advantage_1.svg'
import advantage_2 from 'img/icons/advantage_2.svg'
import advantage_3 from 'img/icons/advantage_3.svg'
import advantage_4 from 'img/icons/advantage_4.svg'

interface IAdvantages {
  img: string,
  title: string
}

export const advantages: Array<IAdvantages> = [
  {
    img: advantage_1,
    title: 'Только стальные решетки',
  },
  {
    img: advantage_2,
    title: 'Приятный лаконичный дизайн',
  },
  {
    img: advantage_3,
    title: 'Любые цвета по каталогу RAL',
  },
  {
    img: advantage_4,
    title: 'Простой и быстрый монтаж',
  },
]
