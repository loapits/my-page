import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../style/MainPage.module.scss'

export const MainPage = React.memo(() => {
  const main = useSelector((state: any) => state.main)

  return (
    <div className={ styles.header }>
      <img src={main.logo} className={styles.logo} alt="Word: Rayark"/>
      <h1 className={styles.name}>{main.title}</h1>
    </div>
  )
})