import React from 'react'
import { ProjectsItemProps} from '../../types/portfolio'
import styles from '../../style/Portfolio.module.scss'

export const ProjectItem = (props: ProjectsItemProps) => {
  return (
    <article className={styles.portfolio__projectDescription_animaiton}>
      <span className={styles.portfolio__projectDescription_bold}>
        {props.itemHeader}
      </span> 
      <span>{props.itemData}</span>
    </article>
  )
}