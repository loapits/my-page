const initialState = {
  resumeTitle: 'Резюме',
  resumeContacts: {
    title: 'Контактная информация',
    fullName: 'Карташов Георгий Игоревич',
    number: '8 (777) 115-93-41',
    email: 'gera59377@gmail.com',
    socials: [
      {id: 0, img: 'url', link: 'github'},
      {id: 1, img: 'url', link: 'linkedIn'}
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