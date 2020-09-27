import React from 'react'
import { ProjectsItemProps} from '../../types/portfolio'
import styles from '../../style/Portfolio.module.scss'

export const ProjectItem = (props: ProjectsItemProps) => {
  return (
    <div className={styles.portfolio__projectDescription_animaiton}>
      <span className={styles.portfolio__projectDescription_bold}>
        {props.itemHeader}
      </span> 
      {props.itemData}
    </div>
  )
}