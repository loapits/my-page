import React from 'react'
import { useSelector } from 'react-redux'
import { Hamburger } from './Hamburger'
import { Options } from './Options'
import { Navigation } from './Navigation'
import { Copyright } from './Copyright'
import styles from '../style/Menu.module.scss'
import { State } from '../types/state'

export const Menu = React.memo(() => {
  const isChanged = useSelector((state: State) => state.burger.isChanged)
  
  return (
    <>
      { isChanged && <Navigation /> }
      <Copyright />
      <div className={styles.mainNavigation}>
        <Hamburger />
        <Options />
      </div>
    </>
  )
})