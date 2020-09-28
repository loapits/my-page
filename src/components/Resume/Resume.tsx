import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import resumeStyles from '../../style/Resume.module.scss'
import { ResumeItem } from './Resume__item'
import { State } from '../../types/state'
import { getResume } from '../../state/resume_reducer'
import { getMain } from '../../state/main_reducer'
import { Preloader } from '../Preloader'

export const Resume = React.memo(() => {
  const resume = useSelector((state: State) => state.resume.resume)
  const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(getResume())
    dispatch(getMain())
    // eslint-disable-next-line
  }, [])
  
  document.title = 'Резюме'
  const headLarge = [resumeStyles.resume__head, resumeStyles.resume__head_large].join(' ')
  const headSmall = [resumeStyles.resume__head, resumeStyles.resume__head_small].join(' ')
  
  return (
    <div className='pageContainer'>
      <div className={resumeStyles.resume}>
        <div className={resumeStyles.resume__description}>
          <h1 className={headLarge}>{resume.title}</h1>
          <div className={resumeStyles.resume__main}>
            <img className={resumeStyles.resume__avatar} src={resume.avatar} alt={resume.alt} />
            {!resume.contacts && <Preloader />}
            <p>{resume.aboutMe}</p>
          </div>
        </div>
        {resume.contacts && 
          <section className={resumeStyles.resume__secondInfo}>
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
                <a href={resume.contacts.socials.linkedin} className={resumeStyles.resume__linkedin}></a>
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
        }
      </div>
    </div>
  )
})