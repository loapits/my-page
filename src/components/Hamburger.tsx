import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchIsChanged } from '../state/burger-reducer'
import styles from '../style/Hamburger.module.scss'

export const Hamburger = React.memo(() => {
  const isChanged = useSelector((state: any) => state.burger.isChanged)
  const dispatch = useDispatch()
  
  const hamburger = styles.hamburger+' '+styles.hamburgerRotate
  const crossHamburger = styles.hamburger+' '+styles.hamburgerRotate+' '+styles.active

  const switchDispatch = () => {
    dispatch(switchIsChanged(!isChanged))
  }

  return(
    <div>
      <svg
        className={isChanged === false ? hamburger : crossHamburger}
        viewBox="0 0 100 100"
        onClick={switchDispatch}
      >
        <path
          className={styles.line+' '+styles.top}
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" 
        />
        <path
          className={styles.line+' '+styles.middle}
          d="m 70,50 h -40" 
        />
        <path
          className={styles.line+' '+styles.bottom}
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" 
        />
      </svg>
    </div>
  )
})