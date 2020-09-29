import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIsChanged, switchIsChanged } from '../state/burger_reducer'
import styles from '../style/Hamburger.module.scss'
import { State } from '../types/state'

export const Hamburger = React.memo(() => {
  const isChanged = useSelector((state: State) => state.burger.isChanged)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getIsChanged())
    // eslint-disable-next-line
  }, [])

  
  const hamburger = styles.menuToggle
  const crossHamburger = styles.menuToggle+' '+styles.active
 
  const switchDispatch = () => {
    dispatch(switchIsChanged(!isChanged))
  }

  return(
    <button tabIndex={0} onClick={switchDispatch} className={!isChanged ? hamburger : crossHamburger}>
      <span className={styles.span1}></span>
      <span className={styles.span2}></span>
      <span className={styles.span3} ></span>
    </button>
  )
})