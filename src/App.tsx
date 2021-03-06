import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { CoffeeCup } from './components/CoffeeCup'
import './style/index.scss'

const Menu = React.lazy(() => import('./components/Menu').then(({Menu}) => ({default: Menu})))
const MainPage = React.lazy(() => import('./components/MainPage').then(({MainPage}) => ({default: MainPage})))
const Resume = React.lazy(() => import('./components/Resume/Resume').then(({Resume}) => ({default: Resume})))
const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio').then(({Portfolio}) => ({default: Portfolio})))

export const App = React.memo(() => {
  return(
    <Suspense fallback={<CoffeeCup class='cupBlock darkCup'/>}>
      <Menu />
      {/* <CoffeeCup class='cupBlock darkCup'/> */}
      <Switch>
        <Route path="/" exact render={() => <MainPage />} />
        <Route path="/resume" exact render={() => <Resume />} />
        <Route path="/portfolio" exact render={ () => <Portfolio />} />
      </Switch>
    </Suspense>
  )
})