import React from 'react'
import { Route } from 'react-router-dom'
import { MainPage } from './components/MainPage'
import { Menu } from './components/Menu'
import { AboutMe } from './components/AboutMe'
import '../src/style/App.module.scss'
import { Resume } from './components/Resume'

export const App = React.memo(() => {  
  return(
    <main>
      <Menu />
      <Route path="/" exact render={ () => <MainPage /> } />
      <Route path="/about_me" exact render={ () => <AboutMe /> } />
      <Route path="/resume" exact render={ () => <Resume /> } />
    </main>
  )
})