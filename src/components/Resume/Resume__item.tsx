import React from 'react'
import resumeStyles from '../../style/Resume.module.scss'
import { ResumeItemProps } from '../../types/resume'
import { ResumeComponentItem } from '../../types/resume'

export const ResumeItem = React.memo((props: ResumeItemProps) => {
  const headSmall = [resumeStyles.resume__head, resumeStyles.resume__head_small].join(' ')
  
  return (
    <article key={props.item.id} className={resumeStyles.resume__item}>
      <h2 className={headSmall}>{props.item.title}</h2>
      {props.item.list.map((el: ResumeComponentItem) =>      
        <span key={el.body}>{el.body}</span>
      )}
    </article>
  )
})