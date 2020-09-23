import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../style/Portfolio.module.scss'
import { switchDisplayng } from '../../state/portfolio-reducer'
import '../../style/index.scss'
import { ProjectItem } from './Portfolio__projectItem'

export const Portfolio = React.memo(() => {
  const portfolio = useSelector((state: any) => state.portfolio)
  const dispatch = useDispatch()

  document.title = 'Portfolio'
  
  const selectPortfolioItem = (id: number) => {
    dispatch(switchDisplayng(id))  
  }
  
  return(
    <div className='pageContainer'>
      <div className={styles.portfolio}>
        <div className={styles.portfolio__list}>
          {portfolio.projects.map((el: any) => 
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
        {portfolio.projects.map((el: any) => 
          el.isDisplay && 
          <div className={styles.portfolio__bodyItem} key={el.id} >
            <div className={styles.portfolio__project}>
              <h1 className={styles.portfolio__projectHead}>{el.title}</h1>
              <div className={styles.portfolio__projectView}>
                <img src={el.img} className={styles.portfolio__projectImg} alt=""/>
                <div className={styles.portfolio__projectType}>{el.type}</div>
              </div>
            </div>
            <div className={styles.portfolio__projectDescription}>
              <ProjectItem 
                itemHeader="Описание:"
                itemData={el.description.body}
              />
              <ProjectItem 
                itemHeader="Выполняемые задачи:"
                itemData={el.description.tasks}
              />
              <ProjectItem 
                itemHeader="Инструменты:"
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

