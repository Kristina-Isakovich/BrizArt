import React from 'react'
import { RouteComponentProps, Switch, Route } from 'react-router-dom'
import { AllNews } from './AllNews'
import { OneNews } from './OneNews'
import { news } from './news.service'

export const News: React.FC<RouteComponentProps> = ({match}) => (
  <Switch>
    <Route path={match.url} exact component={AllNews} />

    {news.map(item => (
      <Route key={item.id} 
        path={`${match.url}/${item.title.split(' ').join('_')}`} 
        component={() => <OneNews {...item} />} />
    ))}
  </Switch>
)
