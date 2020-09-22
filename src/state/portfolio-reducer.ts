import carriage from '../assets/img/portfolio/carriage.png'
import lighthouse from '../assets/img/lighthouse/lighthouse.png'
const SWITCH_IS_DISPLAY = 'SWITCH_IS_DISPLAY'

const initialState = {
  projects: [
    {
      id: 0,
      title: 'Carriage', 
      description: {
        linkToSite: 'https://faradarata.000webhostapp.com',
        linkToRepository: 'https://github.com/loapits/Carriage',
        duration: {
          from: '11.20',
          to: '02.20'
        },
        tasks: 'Дизайн сайта, Front-End, Ajax запросы на сервер, написание аудио-плеера. Адаптив для разных устройств. Реализация PWA',
        body: 'Сайт создан как пет-проект, для того чтобы получить опыт в разработке. Идея была создать сайт с информацией об исполнителе, а также реализовать на нем плеер, в котором будут все альбомы, написанные автором.', 
        tools: 'HTML, CSS, JS, jQuery, Ajax, HTML history, GitHub, Sublime Text'
      },
      img: carriage, 
      type: 'Pet-project', 
      lighthouse: lighthouse,
      isDisplay: true
    },
    {
      id: 1,
      title: 'Carriage', 
      description: {
        linkToSite: 'https://faradarata.000webhostapp.com',
        linkToRepository: 'https://github.com/loapits/Carriage',
        duration: {
          from: '11.20',
          to: '02.20'
        },
        tasks: 'еера. Адаптив для разных устройств. Реализация PWA',
        body: 'Сайт создан как пет-проект, для того чтобы получить опыт в разработке. Идея была создать сайт с информацией об исполнителе, а также реализовать на нем плеер, в котором будут все альбомы, написанные автором.', 
        tools: 'HTML, CSS, JS, jQuery, Ajax, HTML history, GitHub, Sublime Text'
      },
      img: lighthouse, 
      type: 'Pet-project', 
      lighthouse: lighthouse,
      isDisplay: false
    },
    {
      id: 2,
      title: 'Carriage', 
      description: {
        linkToSite: 'https://faradarata.000webhostapp.com',
        linkToRepository: 'https://github.com/loapits/Carriage',
        duration: {
          from: '11.20',
          to: '02.20'
        },
        tasks: '-плеера.  устройств. Реализация PWA',
        body: 'Сайт создан как пет-проект, для того чтобы получить опыт в разработке. Идея была создать сайт с информацией об исполнителе, а также реализовать на нем плеер, в котором будут все альбомы, написанные автором.', 
        tools: 'HTML, CSS, JS, jQuery, Ajax, HTML history, GitHub, Sublime Text'
      },
      img: carriage, 
      type: 'Pet-project', 
      lighthouse: lighthouse,
      isDisplay: false
    },
    {
      id: 3,
      title: 'Carriage', 
      description: {
        linkToSite: 'https://faradarata.000webhostapp.com',
        linkToRepository: 'https://github.com/loapits/Carriage',
        duration: {
          from: '11.20',
          to: '02.20'
        },
        tasks: ' Front-End, Ajax запплеера. Адаптив для разных устройств. Реализация PWA',
        body: 'Сайт создан как пет-проект, для того чтобы получить опыт в разработке. Идея была создать сайт с информацией об исполнителе, а также реализовать на нем плеер, в котором будут все альбомы, написанные автором.', 
        tools: 'HTML, CSS, JS, jQuery, Ajax, HTML history, GitHub, Sublime Text'
      },
      img: carriage, 
      type: 'Pet-project', 
      lighthouse: lighthouse,
      isDisplay: false
    }
  ]
}

export type portfolioInitialTypes = typeof initialState

export const portfolioReducer = (state = initialState, action: any): portfolioInitialTypes => {
  switch (action.type) {
    case SWITCH_IS_DISPLAY: {
      return {
        ...state,
        projects: state.projects.map((el: any) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              isDisplay: true
            }
          } else {
            return {
              ...el,
              isDisplay: false
            }
          }
        })
      }
    }
    default:
      return {
        ...state
      }
  }
}

export const switchDisplayng = (id: any) => ({
  type: SWITCH_IS_DISPLAY,
  payload: {
    id: id
  }
})