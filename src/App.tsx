import React from 'react'
import { Route } from 'react-router-dom'
import { MainPage } from './components/MainPage'
import { Menu } from './components/Menu'
import { Resume } from './components/Resume'
import { Portfolio } from './components/Portfolio'
import { Updates } from './components/Updates'
import '../src/style/App.module.scss'

export const App = React.memo(() => {
  return(
    <main>
      <Menu />
      <Route path="/" exact render={ () => <MainPage /> } />
      <Route path="/resume" exact render={ () => <Resume /> } />
      <Route path="/portfolio" exact render={ () => <Portfolio /> } />
      <Route path="/updates" exact render={ () => <Updates /> } />
    </main>
  )
})