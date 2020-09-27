import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../style/Copyright.module.scss'
import { State } from '../types/state'

export const Copyright = React.memo(() => {
  const copyright = useSelector((state: State) => state.main.copyright)
  const isChanged = useSelector((state: State) => state.burger.isChanged)
  
  const switchColor = isChanged === false ? styles.copyright_white : styles.copyright_gray

  return(
    <div className={[styles.copyright, switchColor].join(' ')}>
      {copyright}
    </div>
  )
})