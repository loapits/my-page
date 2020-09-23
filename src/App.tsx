import React from 'react'
import { Route } from 'react-router-dom'
import { MainPage } from './components/MainPage'
import { Menu } from './components/Menu'
import { Resume } from './components/Resume/Resume'
import { Portfolio } from './components/Portfolio/Portfolio'
import '../src/style/index.scss'

export const App = React.memo(() => {
  return(
    <main>
      <Menu />
      <Route path="/" exact render={ () => <MainPage /> } />
      <Route path="/resume" exact render={ () => <Resume /> } />
      <Route path="/portfolio" exact render={ () => <Portfolio /> } />
    </main>
  )
})