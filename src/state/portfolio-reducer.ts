import carriage from '../assets/img/portfolio/carriage.png'
import lighthouse from '../assets/img/lighthouse/lighthouse.png'

const initialState = {
  projects: [
    {
      title: 'Carriage', 
      dscr: 'Описание',
      description: {
        linkToSite: 'https://faradarata.000webhostapp.com',
        linkToRepo: 'https://github.com/loapits/Carriage',
        duration: '11.20 / 02.20',
        tasks: 'Дизайн сайта, Front-End, Ajax запросы на сервер, написание аудио-плеера. Адаптив для разных устройств. Реализация PWA',
        body: 'Сайт создан как пет-проект, для того чтобы получить опыт в разработке. Идея была создать сайт с информацией об исполнителе, а также реализовать на нем плеер, в котором будут все альбомы, написанные автором.', 
        tools: 'HTML, CSS, JS, jQuery, Ajax, HTML history, GitHub, Sublime Text'
      },
      img: carriage, 
      type: 'Pet-project', 
      lighthouse: lighthouse
    }
  ]
}

export type portfolioInitialTypes = typeof initialState

export const portfolioReducer = (state = initialState, action: any): portfolioInitialTypes => {
  switch (action.type) {
    default:
      return {
        ...state
      }
  }
}