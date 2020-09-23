import React from 'react'
import { useSelector } from 'react-redux'
import resumeStyles from '../../style/Resume.module.scss'
import { ResumeItem } from './Resume__item'
import '../../style/index.scss'

export const Resume = React.memo(() => {
  const resume = useSelector((state: any) => state.resume)
  const headLarge = [resumeStyles.resume__head, resumeStyles.resume__head_large].join(' ')
  const headSmall = [resumeStyles.resume__head, resumeStyles.resume__head_small].join(' ')
  
  document.title = 'CV'
  
  return (
    <div className='pageContainer'>
      <div className={resumeStyles.resume}>
        {/* Description */}
        <div className={resumeStyles.resume__description}>
          <h1 className={headLarge}>{resume.title}</h1>
          <div className={resumeStyles.resume__main}>
            <img className={resumeStyles.resume__avatar} src={resume.avatar} alt="Avatar"/>
            <p>{resume.aboutMe}</p>
          </div>
        </div>

        <section className={resumeStyles.resume__secondInfo}>
          {/* Contacts */}
          <article className={resumeStyles.resume__contacts}>
            <h1 className={headSmall}>{resume.contacts.title}</h1>
            <div>Ф.И.О: {resume.contacts.fullName}</div>
            <div>Номер: {resume.contacts.number}</div>
            {/*eslint-disable-next-line*/}
            <div className={resumeStyles.resume__email}>Mail: <a href={'mailto:'+resume.contacts.email}>{resume.contacts.email}</a></div>
            <div className={resumeStyles.resume__images}>
              {/* eslint-disable-next-line */}
              <a href={resume.contacts.socials.github} className={resumeStyles.resume__github}></a>
              {/* eslint-disable-next-line */}
              <a href={resume.contacts.socials.linkedin}className={resumeStyles.resume__linkedin}></a>
            </div>
            <div>{resume.contacts.location}</div>
          </article>
          
          {/* Skills */}
          <ResumeItem item={resume.skills} />    
          
          {/* Education */}
          <ResumeItem item={resume.education} />     

          {/* Tools */}
          <ResumeItem item={resume.tools} />         
        </section>
      </div>
    </div>
  )
})