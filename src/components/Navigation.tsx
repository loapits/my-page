import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { switchIsChanged } from '../state/burger_reducer'
import styles from '../style/Navigation.module.scss'
import { navigationType } from '../types/navigation_types'
import { stateType } from '../types/state_types'

export const Navigation = React.memo(() => {
  const navigation = useSelector((state: stateType) => state.navigation.items)
  const main = useSelector((state: stateType) => state.main)
  const isChanged = useSelector((state: stateType) => state.burger.isChanged)
  const dispatch = useDispatch()

  const switchDispatch = () => {
    dispatch(switchIsChanged(!isChanged))
  }

  return (
    <div className={styles.navigation}>
      <div className={styles.header}>
        <img src={main.logo} className={styles.logo} alt="Word: Rayark"/>
        <h1 className={styles.name}>{main.title}</h1>
      </div>
      <nav className={styles.navigation__items}>
        <ul>
          {navigation.map((li: navigationType) =>
            <li onClick={switchDispatch} key={li.id}><NavLink to={li.link}>{li.title}</NavLink></li>
          )}
        </ul>
      </nav>
    </div>
  )
})