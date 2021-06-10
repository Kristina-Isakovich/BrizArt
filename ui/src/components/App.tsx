import React from 'react'
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom'
// @ts-ignore
import { history } from 'app-history'
import { Header } from './Header'
import { GlobalStyle } from './styles'
import 'antd/dist/antd.css'
// @ts-ignore
import { MainPage } from 'modules/mainPage'
// @ts-ignore
import { News } from 'modules/news'
import { Footer } from './Footer'

const App: React.FC = () => (
  <Router history={history}>
    <GlobalStyle />
    <Header />
    <div className='container'>
      <Switch>
        <Route key={1} path={'/'} exact component={MainPage}/>
        <Route key={2} path={'/news'} component={News}/>
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default App
