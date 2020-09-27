import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../style/Portfolio.module.scss'
import { getPortfolio, switchDisplayng } from '../../state/portfolio_reducer'
import { ProjectItem } from './Portfolio__projectItem'
import { State } from '../../types/state'
import { ProjectsItem } from '../../types/portfolio'

export const Portfolio = React.memo(() => {
  const portfolio = useSelector((state: State) => state.portfolio)
  const dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(getPortfolio())
    // eslint-disable-next-line
  }, [])
  
  document.title = 'Портфолио'
  
  const selectPortfolioItem = (id: number) => {
    dispatch(switchDisplayng(id))
  }
  
  return(
    <div className='pageContainer'>
      <div className={styles.portfolio}>
        <div className={styles.portfolio__list}>
          {portfolio.projects.map((el: ProjectsItem) => 
            <div key={el.id} onClick={() => selectPortfolioItem(el.id)} className={styles.portfolio__listItem}>
              <div className={styles.portfolio__listData}>
                <div className={[styles.portfolio__listDate, el.isDisplay && styles.activeItem].join(' ')}>
                  <div>{el.description.duration.from}</div>
                  <div>{el.description.duration.to}</div>
                </div>
                <div className={styles.portfolio__listDescription}>
                  <div className={styles.portfolio__listType}>{el.type}</div>
                  <h1 className={styles.portfolio__listHeader}>{el.title}</h1>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.portfolio__body}>
          {portfolio.projects.map((el: ProjectsItem) => 
            el.isDisplay && 
            <div className={styles.portfolio__bodyItem} key={el.id} >
              <div className={styles.portfolio__project}>
                <h1 className={styles.portfolio__projectHead}>{el.title}</h1>
                <div className={styles.portfolio__projectView}>
                  <img src={el.img} className={styles.portfolio__projectImg} alt={el.alt}/>
                  <div className={styles.portfolio__projectType}>{el.type}</div>
                </div>
              </div>
              <div className={styles.portfolio__projectDescription}>
                <ProjectItem 
                  itemHeader={el.description.bodyTitle}
                  itemData={el.description.body}
                />
                <ProjectItem
                  itemHeader={el.description.tasksTitle}
                  itemData={el.description.tasks}
                />
                <ProjectItem
                  itemHeader={el.description.toolsTitle}
                  itemData={el.description.tools}
                />
                <div className={styles.portfolio__projectDescription_animaiton}>
                  <span className={styles.portfolio__projectDescription_bold}>Продолжительность:</span> 
                  <span>с {el.description.duration.from}</span>
                  <span> до {el.description.duration.to}</span>
                </div>
                <div className={styles.portfolio__projectDescriptionLinks}>
                  {/* eslint-disable-next-line */}
                  {el.description.linkToRepository && <a href={el.description.linkToSite} className={[styles.link, 'site'].join(' ')}></a>}
                  {/* eslint-disable-next-line */}
                  {el.description.linkToRepository && <a href={el.description.linkToRepository} className={[styles.link, 'github'].join(' ')}></a>}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>  
  )
})