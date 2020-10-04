import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../style/Portfolio.module.scss'
import { getPortfolio, switchDisplayng } from '../../state/portfolio_reducer'
import { ProjectItem } from './Portfolio__projectItem'
import { State } from '../../types/state'
import { ProjectsItem } from '../../types/portfolio'
import { getMain } from '../../state/main_reducer'
import { Preloader } from '../Preloader'

export const Portfolio = React.memo(() => {
  const portfolio = useSelector((state: State) => state.portfolio)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPortfolio())
    dispatch(getMain())
    // eslint-disable-next-line
  }, [])  
 
  document.title = 'Портфолио'
  const selectPortfolioItem = (id: number) => {
    dispatch(switchDisplayng(id))
  }
  
  return(
    <main className='pageContainer'>
      <div className={styles.portfolio}>
        {portfolio.projects.length === 0 && <Preloader />}
        <aside className={styles.portfolio__list}>
          {portfolio.projects.map((el: ProjectsItem) => 
            <section
              key={el.id}
              onClick={() => selectPortfolioItem(el.id)} 
              className={styles.portfolio__listItem}
              aria-label={el.title}
            >
              <article className={styles.portfolio__listData}>
                <aside className={[styles.portfolio__listDate, el.isDisplay && styles.activeItem].join(' ')}>
                  <span>{el.description.duration.from}</span>
                  <span>{el.description.duration.to}</span>
                </aside>
                <section className={styles.portfolio__listDescription}>
                  <span className={styles.portfolio__listType}>{el.type}</span>
                  <h2 className={styles.portfolio__listHeader}>{el.title}</h2>
                </section>
              </article>
            </section>
          )}
        </aside>
        <section className={styles.portfolio__body}>
          {portfolio.projects.map((el: ProjectsItem) => 
            el.isDisplay && 
            <article className={styles.portfolio__bodyItem} key={el.id} >
              <section className={styles.portfolio__project}>
                <h1 className={styles.portfolio__projectHead}>{el.title}</h1>
                <div className={styles.portfolio__projectView}>
                  <img 
                    src={el.img.src} 
                    className={styles.portfolio__projectImg} 
                    alt={el.img.alt}
                  />
                  <span className={styles.portfolio__projectType}>{el.type}</span>
                </div>
              </section>
              <section className={styles.portfolio__projectDescription}>
                <ProjectItem 
                  itemHeader={el.description.body.title}
                  itemData={el.description.body.body}
                />
                <ProjectItem
                  itemHeader={el.description.task.title}
                  itemData={el.description.task.body}
                />
                <ProjectItem
                  itemHeader={el.description.tools.title}
                  itemData={el.description.tools.body}
                />
                <article className={styles.portfolio__projectDescription_animaiton}>
                  <span className={styles.portfolio__projectDescription_bold}>Продолжительность:</span> 
                  <span>с {el.description.duration.from}</span>
                  <span> до {el.description.duration.to}</span>
                </article>
                <article className={styles.portfolio__projectDescriptionLinks}>
                  {el.description.links.repository && 
                    /* eslint-disable-next-line */
                    <a 
                      href={el.description.links.site} 
                      aria-label="Ссылка на гитхаб" 
                      className={[styles.link, 'site'].join(' ')}
                    ></a>
                  }
                  {el.description.links.repository && 
                    /* eslint-disable-next-line */
                    <a 
                      href={el.description.links.repository} 
                      aria-label="Ссылка на linkedin" 
                      className={[styles.link, 'github'].join(' ')}
                    ></a>
                  }
                </article>
              </section>
            </article>
          )}
        </section>
      </div>
    </main>  
  )
})