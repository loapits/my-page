import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../style/MainPage.module.scss'
import { getMain } from '../state/main_reducer'
import { State } from '../types/state'
import { Preloader } from './Preloader'

export const MainPage = React.memo(() => {
  const main = useSelector((state: State) => state.main)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMain())
    // eslint-disable-next-line
  }, [])
  
  document.title = 'Главная'

  return (
    <main className={ styles.header }>
      {!main.logo && !main.title && <Preloader />}
      <img src={main.logo} className={styles.logo} alt={main.alt}/>
      <h1 className={styles.name}>{main.title}</h1>
    </main>
  )
})