import React from 'react'
//import { Provider } from 'react-redux'
import {
    Router,
    Switch,
    Route,
} from 'react-router-dom'
import { history } from 'app-history'
import { Header } from './Header'
import { StyledContainer } from './styles'

const App: React.FC = () => (
    //<Provider store={}>
        <Router history={history}>
            <StyledContainer>
                <Header />
                <section>
                    <Switch>
                        <Route key={1} path={'/'} />
                        <Route/>
                    </Switch>
                </section>
            </StyledContainer>
        </Router>
    //</Provider>
)

export default App
