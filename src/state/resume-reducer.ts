import avatar from '../assets/img/avatar.jpg'

const initialState = {
  title: 'Резюме',
  contacts: {
    avatar: avatar,
    title: 'Контактная информация',
    fullName: 'Карташов Георгий Игоревич',
    number: '8 (777) 115-93-41',
    email: 'gera59377@gmail.com',
    socials: [
      {id: 0, link: 'https://github.com/loapits'},
      {id: 1, link: 'https://www.linkedin.com/in/gkartashov/'}
    ],
    location: 'Казахстан, ВКО, г.Усть-Каменогорск'
  }
}

export type resumeInitialTypes = typeof initialState

export const resumeReducer = (state = initialState, action: any): resumeInitialTypes => {
  switch (action.type) {
    default: 
      return {
        ...state
      }
  }
}