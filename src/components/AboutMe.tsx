import React from 'react'
import { useSelector } from 'react-redux'
import aboutStyles from '../style/AboutMe.module.scss'
import mainStyles from '../style/App.module.scss'

export const AboutMe = () => {
  const aboutMe = useSelector((state: any) => state.aboutMe)
  return (
    <div className={[aboutStyles.aboutMe, mainStyles.pageContainer].join(' ')}>
      <div className={aboutStyles.aboutMe__main}>
        <h1 className={aboutStyles.aboutMe__header}>{aboutMe.title}</h1>
        <section className={aboutStyles.aboutMe__section}>{aboutMe.body}</section>
      </div>
    </div>
  )
}