import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../style/Copyright.module.scss'
import { stateType } from '../types/state_types'

export const Copyright = React.memo(() => {
  const copyright = useSelector((state: stateType) => state.main.copyright)
  const isChanged = useSelector((state: stateType) => state.burger.isChanged)
  
  const switchColor = isChanged === false ? styles.copyright_white : styles.copyright_gray

  return(
    <div className={[styles.copyright, switchColor].join(' ')}>
      {copyright}
    </div>
  )
})