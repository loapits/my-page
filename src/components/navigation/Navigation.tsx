import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../../style/Navigation.module.scss'

export const Navigation = React.memo(() => {
  const navigation = useSelector((state: any) => state.navigation.navigationItems)
  const logo = useSelector((state: any) => state.main.logoSrc)
  const headTitle = useSelector((state: any) => state.main.headTitle)
    
  return (
    <div className={styles.navigation}>
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="Word: Rayark"/>
        <h1 className={styles.name}>{headTitle}</h1>
      </div>
      <nav className={styles.navigation__items}>
        <ul> 
          {navigation.map((li: any) => 
            <li key={li.id}><a href={li.link}>{li.title}</a></li>
          )}
        </ul>
      </nav>
    </div>
  )
})