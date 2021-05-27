import React from 'react'
import Scroll from 'img/icons/scroll.svg'
import { StyledContainer, StyledTable, StyledTitles } from './styles'
import { Carousel } from 'antd'
import { lattices } from '../../lattices.service'
import './index.css'

export const Lattices:React.FC = () => (
  <Carousel
    dots={false}
    arrows
    nextArrow={<img src={Scroll} alt='>'/>}
    prevArrow={<img src={Scroll} alt='<'/>}
    autoplay
  >
    {lattices.map(({background, ellipse, name, price, table, id}) => (
      <div key={name}>
        <StyledContainer>
          <img className='background' src={background} alt='Background'/>
          <img className='ellipse' src={ellipse} alt='Ellipse'/>
          <StyledTitles>
            <p className='name'>{name}</p>
            <p className='price'>€{price}</p>
          </StyledTitles>
        </StyledContainer>

        <StyledTable id={id}>
          <p>Скорость воздуха, м/с</p>
          {table.speed.map(i => <p key={i}>{i.toFixed(1)}</p>)}
          <p>Расход воздуха, м3/ч</p>
          {table.consumption.map(i => <p key={i}>{i.toFixed(1)}</p>)}
        </StyledTable>
      </div>
    ))}
  </Carousel>
)
