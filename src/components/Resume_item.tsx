import React from 'react'
import resumeStyles from '../style/Resume.module.scss'

export const ResumeItem = (props: any) => {
  console.log(props)
  
  const headSmall = [resumeStyles.resume__head, resumeStyles.resume__head_small].join(' ')
  
  return (
    <article className={resumeStyles.resume__item}>
      <h1 className={headSmall}>{props.item.title}</h1>
      {props.item.list.map((el:any) => 
        <div key={el.id}>{el.body}</div>
      )}
    </article>
  )
}