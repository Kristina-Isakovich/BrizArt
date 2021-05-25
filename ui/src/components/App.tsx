import React from 'react'
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom'
import { history } from 'app-history'
import { Header } from './Header'
import { GlobalStyle, StyledContainer } from './styles'
import 'antd/dist/antd.css'
import { MainPage } from 'modules/mainPage'
import { News } from 'modules/news'
import { Footer } from './Footer'

const App: React.FC = () => (
  <Router history={history}>
    <GlobalStyle />
    <Header />

    <StyledContainer>
      <Switch>
        <Route key={1} path={'/'} exact component={MainPage}/>
        <Route key={2} path={'/news'} component={News}/>
      </Switch>
      <Footer />
    </StyledContainer>
  </Router>
)

export default App
