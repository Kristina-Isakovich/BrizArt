import React from 'react'
import Scroll from 'img/icons/scroll.svg'
import { StyledContainer, StyledTable, StyledTitles } from './styles'
import Slider from 'infinite-react-carousel'
import { lattices } from './lattices.service'

export const Lattices:React.FC = () => (
  <Slider
    nextArrow={<img src={Scroll} alt='>'/>}
    prevArrow={<img style={{transform: 'scaleX(-1)'}} src={Scroll} alt='<'/>}
    autoplay={true}
  >
    {lattices.map(({background, ellipse, name, price, table}) => (
      <div key={name}>
        <StyledContainer>
          <img className='background' src={background} alt='Background'/>
          <img className='ellipse' src={ellipse} alt='Ellipse'/>
          <StyledTitles>
            <p className='name'>{name}</p>
            <p className='price'>€{price}</p>
          </StyledTitles>
        </StyledContainer>

        <StyledTable>
          <p>Скорость воздуха, м/с</p>
          {table.speed.map(i => <p>{i.toFixed(1)}</p>)}
          <p>Расход воздуха, м3/ч</p>
          {table.consumption.map(i => <p>{i.toFixed(1)}</p>)}
        </StyledTable>
      </div>
    ))}
  </Slider>
)
