import avatar from '../assets/img/avatar.jpg'
import { resumeApi } from '../api/api'
import { SET_RESUME_STATE } from './action_types'
import { resumeObjectType, ResumeReduceType } from '../types/resume_types'

const initialState = {
  resume: {
    title: 'Резюме',
    pageTitle: 'Резюме',
    avatar: avatar,
    aboutMe: 'Frontend developer, который хочет развиваться в этом направлении. Интересует Web-development и в целом в программирование.',
    contacts: {
      title: 'Контактная информация:',
      fullName: 'Карташов Георгий Игоревич',
      number: '8 (777) 115-93-41',
      email: 'gera59377@gmail.com',
      socials: {
        github: 'https://github.com/loapits',
        linkedin: 'https://www.linkedin.com/in/gkartashov'
      },
      location: 'Казахстан, ВКО, г.Усть-Каменогорск'
    },
    skills: {
      title: 'Навыки:',
      list: [
        {id: 0, body: 'JavaScript, jQuery'},
        {id: 0, body: 'HTML, HTML 5, Pug, CSS, SCSS'},
        {id: 0, body: 'ReactJS, Redux'},
        {id: 0, body: 'PHP, SQL'}
      ]
    },
    tools: {
      title: 'Инструменты:',
      list: [
        {id: 0, body: 'Visual Studio Code, Sublime Text'},
        {id: 0, body: 'Git, GitHub, GitLab, Trello'},
        {id: 0, body: 'Webpack, Jest, Swagger, PhaserJS'}
      ]
    },
    education: {
      title: 'Образование:',
      list: [
        {id: 0, body: '2015 / 2019 - (ВТГК) - Восточный техническо - гумманитарный колледж'}
      ]
    },
    alt: ''
  }
}

export type resumeInitialTypes = typeof initialState

export const resumeReducer = (state = initialState, action: ResumeReduceType): resumeInitialTypes => {  
  switch (action.type) {
    case SET_RESUME_STATE: {
      return {
        ...state, 
        resume: action.payload.resume
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

const setResume = (resume: resumeObjectType) => ({
  type: SET_RESUME_STATE,
  payload: {
    resume: resume
  }
})

export const getResume = () => async (dispatch: Function) => {
  const response = await resumeApi.getResume()
  console.log(response.data)
  
  dispatch(setResume(response.data))
}