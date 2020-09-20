import React from 'react'
import { useSelector } from 'react-redux'
import mainStyles from '../style/App.module.scss'
import portfolioStyles from '../style/Portfolio.module.scss'

export const Portfolio = React.memo(() => {
  const portfolio = useSelector((state: any) => state.portfolio)
  
  return(
    <div className={mainStyles.pageContainer}>
      <div className={portfolioStyles.portfolio}>
        <div className={portfolioStyles.portfolio__descriptionItem}>
          <h1 className={portfolioStyles.portfolio__descriptionTitle}>{portfolio.projects[0].dscr}</h1>
          {/* eslint-disable-next-line */}
          <div><span className={portfolioStyles.portfolio__descriptionItem_weight}>Репозиторий:</span> <a href={portfolio.projects[0].description.linkToRepo} target="_blank">{portfolio.projects[0].description.linkToRepo}</a></div>
          <div><span className={portfolioStyles.portfolio__descriptionItem_weight}>Продолжительность:</span> {portfolio.projects[0].description.duration}</div>
          <div><span className={portfolioStyles.portfolio__descriptionItem_weight}>Описание:</span> {portfolio.projects[0].description.tasks}</div>
          <div><span className={portfolioStyles.portfolio__descriptionItem_weight}>Выполняемые задачи:</span> {portfolio.projects[0].description.body}</div>
          <div><span className={portfolioStyles.portfolio__descriptionItem_weight}>Инструменты:</span> {portfolio.projects[0].description.tools}</div>
        </div>
        <div className={portfolioStyles.portfolio__viewItem}>
          <div className={portfolioStyles.portfolio__headerView}>
            <h1 className={portfolioStyles.portfolio__viewTitle}>{portfolio.projects[0].title}</h1>
            <img className={portfolioStyles.portfolio__viewImg} src={portfolio.projects[0].lighthouse} alt=""/>
          </div>
          <div className={portfolioStyles.portfolio__img}>
            <div className={portfolioStyles.portfolio__projectType}>{portfolio.projects[0].type}</div>
            {/* eslint-disable-next-line */}
            <a href={portfolio.projects[0].description.linkToSite} target="_blank"><img className={portfolioStyles.portfolio__imageView} src={portfolio.projects[0].img} alt=""/></a>
          </div>
        </div>
      </div>
    </div>  
  )
})