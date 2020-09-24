import React from 'react'
import { projectsItemPropsTypes } from '../../types/portfolio_types'
import styles from '../../style/Portfolio.module.scss'

export const ProjectItem = (props: projectsItemPropsTypes) => {
  return (
    <div className={styles.portfolio__projectDescription_animaiton}>
      <span className={styles.portfolio__projectDescription_bold}>
        {props.itemHeader}
      </span> 
      {props.itemData}
    </div>
  )
}