import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../style/Resume.module.scss'
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
  const headLarge = [styles.resume__head, styles.resume__head_large].join(' ')
  const headSmall = [styles.resume__head, styles.resume__head_small].join(' ')
  
  return (
    <main className='pageContainer'>
      <div className={styles.resume}>
        <section className={styles.resume__description}>
          <h1 className={headLarge}>{resume.title}</h1>
          <article className={styles.resume__main}>
            <img 
              className={styles.resume__avatar} 
              src={resume.avatar} 
              alt={resume.alt} 
            />
            {!resume.contacts && <Preloader />}
            <p>{resume.aboutMe}</p>
          </article>
        </section>
        {resume.contacts && 
          <section className={styles.resume__secondInfo}>
            <article className={styles.resume__contacts}>
              <h2 className={headSmall}>{resume.contacts.title}</h2>
              <span><span>Ф.И.О: </span>{resume.contacts.fullName}</span>
              <span><span>Номер: </span>{resume.contacts.number}</span>
              {/*eslint-disable-next-line*/}
              <span
                className={styles.resume__email}>
                  <span>Mail: </span>
                  <a 
                    className={styles.resume__emailLink}
                    href={'mailto:'+resume.contacts.email}
                  >
                    {resume.contacts.email}
                  </a>
              </span>
              <span className={styles.resume__images}>
                {/* eslint-disable-next-line */}
                <a 
                  href={resume.contacts.socials.github}
                  aria-label="Ссылка на гитхаб" 
                  className={styles.resume__github}
                ></a>
                {/* eslint-disable-next-line */}
                <a
                  href={resume.contacts.socials.linkedin} 
                  aria-label="Ссылка на linkedin" 
                  className={styles.resume__linkedin}
                ></a>
              </span>
              <span>{resume.contacts.location}</span>
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
    </main>
  )
})