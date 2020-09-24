import carriage from '../assets/img/portfolio/carriage.png'
import simon from '../assets/img/portfolio/simon_games.png'
import textshifter from '../assets/img/portfolio/textshifter.png'
import mars_rovers from '../assets/img/portfolio/mars_rovers.png'
import { SWITCH_IS_DISPLAY } from './action_types'
import { portfolioReducerTypes } from '../types/portfolio_types'

const initialState = {
  pageTitle: 'Портфолио',
  projects: [
    {
      id: 0,
      title: 'Carriage',
      description: {
        linkToSite: 'https://carr1age.herokuapp.com',
        linkToRepository: 'https://github.com/loapits/carriage',
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
      isDisplay: true
    },
    {
      id: 1,
      title: 'Mars rover racing', 
      description: {
        linkToSite: 'https://perserverance.fun',
        linkToRepository: 'https://github.com/ataztech910/perserverance-game-hackaton',
        duration: {
          from: '09.05.20',
          to: '10.05.20'
        },
        tasks: 'Сделал фиксированный показатель очков, думал над алгоритмом рандомной карты.',
        body: 'Игра для браузера. Сделана в рамках hackathon`а в честь запуска нового марсохода. На этом проетке получил опыт командной разработки, а так же познакомился с таким инструментом как Phaser3.', 
        tools: 'NodeJS, Express, Socet.io, Webpack, PhaserJS3, TypeScript, OOP, Tilde, XML, JSON, VS Code.'
      },
      img: mars_rovers, 
      type: 'Hakathon', 
      isDisplay: false
    },
    {
      id: 2,
      title: 'Smart Trading', 
      description: {
        linkToSite: 'http://smart-trading.net',
        linkToRepository: 'https://github.com/loapits/smart-trading',
        duration: {
          from: '10.03.20',
          to: '15.04.20'
        },
        tasks: 'Верстка, разработка бэкенда. Добавление админ панели для добавления и редактирования контернта. Реализация разархивации на сервере с использованием инструмента Quickstart.',
        body: 'Проект сделан как новостной сайт.', 
        tools: 'PHP, XAMPP, MySQL, GitLab, SCSS, VS Code, Quickstart, Trello, Hubstaff.'
      },
      img: carriage,
      type: 'Commercial', 
      isDisplay: false
    },
    {
      id: 3,
      title: 'Textshifter', 
      description: {
        linkToSite: 'https://loapits.github.io/textshifter/',
        linkToRepository: 'https://github.com/loapits/textshifter',
        duration: {
          from: '01.06.20',
          to: '06.06.20'
        },
        tasks: 'Реализация функционала с помощью библиотеки React в связке с Redux и TypeScript. Написание тестов. Деплой на GitHub Pages',
        body: 'Была идея сделать приложение для форматирования текста. Таких сайтов много, но небыло найдено ни одного, где было бы все собрано в одном месте.', 
        tools: 'TypeScript, React, Redux, SCSS, Git, GitHub, GitHub Pages, Jest, VS Code, Trello, Google Analytics.'
      },
      img: textshifter, 
      type: 'Pet-project', 
      isDisplay: false
    },
    {
      id: 4,
      title: 'Simon game', 
      description: {
        linkToSite: 'https://loapits.github.io/simon-vue-game/',
        linkToRepository: 'https://github.com/loapits/simon-vue-game',
        duration: {
          from: '23.08.20',
          to: '27.08.20'
        },
        tasks: 'Полное создание игры. Деплой на GitHub Pages.',
        body: 'Хотелось создать игру на веб технологиях. Реализована с помощью фреймворка VueJS.', 
        tools: 'VueJS, Git, GitHub, VS Code, GitHub Pages.'
      },
      img: simon, 
      type: 'Pet-project', 
      isDisplay: false
    }
  ]
}

export type portfolioInitialTypes = typeof initialState

export const portfolioReducer = (state = initialState, action: portfolioReducerTypes): portfolioInitialTypes => {
  switch (action.type) {
    case SWITCH_IS_DISPLAY: {
      return {
        ...state,
        projects: state.projects.map(el => {
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
    default: {
      return {
        ...state
      }
    }
  }
}

export const switchDisplayng = (id: number) => ({
  type: SWITCH_IS_DISPLAY,
  payload: {
    id: id
  }
})