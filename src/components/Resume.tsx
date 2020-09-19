import React from 'react'
import { useSelector } from 'react-redux'
import mainStyles from '../style/App.module.scss'
import resumeStyles from '../style/Resume.module.scss'

export const Resume = () => {
  const resume = useSelector((state: any) => state.resume)
  return (
    <div className={mainStyles.pageContainer}>
      <div className={resumeStyles.resume}>
        <h1 className={resumeStyles.resume__head}>{resume.title}</h1>
        <div className={resumeStyles.resume__contactInfo}>
          <img className={resumeStyles.resume__avatar} src={resume.contacts.avatar} alt="Avatar"/>
          <div className={resumeStyles.resume__contacts}>
            <div>{resume.contacts.title}</div>
            <div>{resume.contacts.fullName}</div>
            <div>{resume.contacts.number}</div>
            {/*eslint-disable-next-line*/}
            <a href={'mailto:'+resume.contacts.email}>{resume.contacts.email}</a>
            {resume.contacts.socials.map((el: any) =>
            // eslint-disable-next-line
              <a href={el.link}>djhgfs </a>
            )}
            <div>{resume.contacts.location}</div>
          </div>
        </div>
      </div>
    </div>
  )
}