import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../src/style/App.module.scss'
import { Hamburger } from './components/hamburger/Hamburger'
import { Navigation } from './components/navigation/Navigation'
import { Socials } from './components/options/Options'
import { Copyright } from './components/copyright/Copyright'

export const App = React.memo(() => {
  const logo = useSelector((state: any) => state.main.logoSrc)
  const headTitle = useSelector((state: any) => state.main.headTitle)
  const isChanged = useSelector((state: any) => state.burger.isChanged)
  
  return(
    <main className={styles.main}>
      { isChanged && <Navigation /> }
      <Copyright />
      <div className={styles.mainNavigation}>
        <Hamburger /> 
        <Socials />
      </div>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="Word: Rayark"/>
        <h1 className={styles.name}>{headTitle}</h1>
      </div>
    </main>
  )
})