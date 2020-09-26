import React from 'react'
import resumeStyles from '../../style/Resume.module.scss'
import { resumeItemPropsType } from '../../types/resume_types'
import { ResumeComponentItemType } from '../../types/resume_types'

export const ResumeItem = React.memo((props: resumeItemPropsType) => {
  const headSmall = [resumeStyles.resume__head, resumeStyles.resume__head_small].join(' ')
  
  return (
    <article className={resumeStyles.resume__item}>
      <h1 className={headSmall}>{props.item.title}</h1>
      {props.item.list.map((el: ResumeComponentItemType) =>      
        <div key={el.id}>{el.body}</div>
      )}
    </article>
  )
})