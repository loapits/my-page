import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../style/Portfolio.module.scss'
import '../style/index.scss'
import { switchDisplayng } from '../state/portfolio-reducer'

export const Portfolio = React.memo(() => {
  const portfolio = useSelector((state: any) => state.portfolio)
  const dispatch = useDispatch()

  const selectPortfolioItem = (id: number) => {
    dispatch(switchDisplayng(id))  
  }
  
  return(
    <div className='pageContainer'>
      <div className={styles.portfolio}>
        <div className={styles.portfolio__list}>
          {portfolio.projects.map((el: any) => 
            <div key={el.id} onClick={() => selectPortfolioItem(el.id)} className={styles.portfolio__projectItem}>
              <div className={styles.portfolio__projectData}>
                <div className={[styles.portfolio__projectDate, el.isDisplay && styles.activeItem].join(' ')}>
                  <div>{el.description.duration.from}</div>
                  <div>{el.description.duration.to}</div>
                </div>
                <div className={styles.portfolio__listDescript}>
                  <div className={styles.portfolio__type}>{el.type}</div>
                  <h1 className={styles.portfolio__headerOfProject}>{el.title}</h1>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={styles.portfolio__body}>
        {portfolio.projects.map((el: any) => 
          el.isDisplay && 
          <div key={el.id} >
            <div>
              <h1 className={styles.portfolio__bodyHead}>{el.title}</h1>
              <img src={el.img} className={styles.portfolio__bodyImg} alt=""/>
            </div>
            <div>
            {el.description.tasks}
            </div>
          </div>
        )}
        </div>
      </div>
    </div>  
  )
})

