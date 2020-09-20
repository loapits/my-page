import React from 'react'
import mainStyles from '../style/App.module.scss'
import portfolioStyles from '../style/Portfolio.module.scss'
import img from '../assets/img/portfolio/carriage.png'

export const Portfolio = () => (
  <div className={mainStyles.pageContainer}>
    <div className={portfolioStyles.portfolio}>
      <div>
        <h1>Carriage</h1>
        <p>Half-Chinese and half-Japanese, Yuko grew up in a happy, loving family. She's very pretty and, after being scouted by a famous modeling agency, has frequented the social circles of the entertainment industry since junior high. With her charming appearance and her effortless modeling talent, she quickly rose to stardom and is now considered a teen idol. She hasn’t let fame go to her head, though—but she still struggles with the constant attention from passionate fans.Yuko moved to Lan Kong with her father when she was still in high school. That’s how she met Chelsea and Ocean and came to join the band. Thanks to her background and contacts in the entertainment industry, Yuko often acts as the band’s agent, helping to book gigs and other events.</p>
      </div>
      <img src={img} alt=""/>
    </div>
  </div>  
)