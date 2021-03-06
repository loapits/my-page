import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { switchIsChanged } from '../state/burger_reducer'
import { getNavigation } from '../state/navigation_reducer'
import styles from '../style/Navigation.module.scss'
import { NavigationItem } from '../types/navigation'
import { State } from '../types/state'

export const Navigation = React.memo(() => {
  const navigation = useSelector((state: State) => state.navigation)
  const main = useSelector((state: State) => state.main)
  const isChanged = useSelector((state: State) => state.burger.isChanged)
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(getNavigation())
    //eslint-disable-next-line
  }, [])
  
  const switchDispatch = () => {
    dispatch(switchIsChanged(!isChanged))
  }

  return (
    <div className={styles.navigation}>
      <div className={styles.header}>
        <img src={navigation.logo} className={styles.logo} alt={main.alt}/>
        <h1 className={styles.name}>{main.title}</h1>
      </div>
      <nav className={styles.navigation__items}>
        <ul className={styles.navigation__ul}>
          {navigation.items.map((li: NavigationItem) =>
            <li 
              onClick={switchDispatch} 
              key={li.id}
              className={styles.navigation__li}
            >
              <NavLink 
                tabIndex={li.id+1} 
                aria-label={li.title} 
                to={li.link}
                className={styles.navigation__link}
              >
                {li.title}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
})