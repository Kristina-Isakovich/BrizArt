import React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
import { news } from '../news.service'
import { StylesNews } from './styles'

export const AllNews: React.FC<RouteComponentProps> = ({match}) => {
  return (
    <>
      {news.map(({id, img, title, text}) => (
        <StylesNews key={id}>
          <img className='news__img' src={img} />
          <h1 className='news__title'>{title}</h1>
          <div className='news__text'>
            {text.substr(0, 240)}
            <span>... </span>
            <Link to={`${match.url}/${title.split(' ').join('_')}`}
              className='news__link'>
                читать далее
            </Link>
          </div>
        </StylesNews>
      ))}
    </>
  )
}
