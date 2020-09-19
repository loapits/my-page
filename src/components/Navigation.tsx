import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { switchIsChanged } from '../state/burger-reducer'
import styles from '../style/Navigation.module.scss'

export const Navigation = React.memo(() => {
  const navigation = useSelector((state: any) => state.navigation.items)
  const main = useSelector((state: any) => state.main)
  const isChanged = useSelector((state: any) => state.burger.isChanged)
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
          {navigation.map((li: any) =>
            <li onClick={switchDispatch} key={li.id}><NavLink to={li.link}>{li.title}</NavLink></li>
          )}
        </ul>
      </nav>
    </div>
  )
})