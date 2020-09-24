import React from 'react'
import { useSelector } from 'react-redux'
import { Hamburger } from './Hamburger'
import { Options } from './Options'
import { Navigation } from './Navigation'
import { Copyright } from './Copyright'
import styles from '../style/Menu.module.scss'
import { stateType } from '../types/state_types'

export const Menu = React.memo(() => {
  const isChanged = useSelector((state: stateType) => state.burger.isChanged)
  
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