import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../style/MainPage.module.scss'
import { stateType } from '../types/state_types'

export const MainPage = React.memo(() => {
  const main = useSelector((state: stateType) => state.main)

  document.title = main.pageTitle

  return (
    <div className={ styles.header }>
      <img src={main.logo} className={styles.logo} alt="Word: Rayark"/>
      <h1 className={styles.name}>{main.title}</h1>
    </div>
  )
})