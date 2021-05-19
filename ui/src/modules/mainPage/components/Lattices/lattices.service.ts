import Background1 from 'img/Background_1.png'
import Ellipse1 from 'img/Ellipse_1.png'
import Background2 from 'img/Background_2.png'
import Ellipse2 from 'img/Ellipse_2.png'
import Background3 from 'img/Background_3.png'
import Ellipse3 from 'img/Ellipse_3.png'
import Background4 from 'img/Background_4.png'
import Ellipse4 from 'img/Ellipse_4.png'

interface ITable {
  speed: Array<number>,
  consumption: Array<number>
}

interface ILattices {
  background: string,
  ellipse: string,
  name: string,
  price: number,
  table: ITable
}

export const lattices: Array<ILattices> = [
  {
    background: Background1,
    ellipse: Ellipse1,
    name: 'Original',
    price: 27.99,
    table: {
      speed: [1.0, 1.5, 2.0, 2.5],
      consumption: [22.5, 33.7, 44.9, 56.1],
    },
  },
  {
    background: Background2,
    ellipse: Ellipse2,
    name: 'Petals',
    price: 33.99,
    table: {
      speed: [1.0, 1.5, 2.0, 2.5],
      consumption: [29.7, 44.6, 59.5, 74.3],
    },
  },
  {
    background: Background3,
    ellipse: Ellipse3,
    name: 'Tornado',
    price: 33.99,
    table: {
      speed: [1.0, 1.5, 2.0, 2.5],
      consumption: [28.9, 43.4, 57.9, 72.3],
    },
  },
  {
    background: Background4,
    ellipse: Ellipse4,
    name: 'BY-BY',
    price: 33.99,
    table: {
      speed: [1.0, 1.5, 2.0, 2.5],
      consumption: [23.8, 35.6, 47.5, 56.4],
    },
  },
]
