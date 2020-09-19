import React from 'react'
import { useSelector } from 'react-redux'
import { Hamburger } from './Hamburger'
import { Socials } from './Options'
import { Navigation } from './Navigation'
import { Copyright } from './Copyright'
import styles from '../style/Menu.module.scss'

export const Menu = React.memo(() => {
  const isChanged = useSelector((state: any) => state.burger.isChanged)
  return (
    <>
    { isChanged && <Navigation /> }
        <Copyright />
        <div className={styles.mainNavigation}>
          <Hamburger />
          <Socials />
        </div>
    </>
  )
})