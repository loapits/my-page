import logo from '../assets/icons/logo.png'

const initialState = {
  logo: logo,
  title: 'Georgiy Kartashov',
  copyright: 'Ⓒ Georgiy Kartashov, 2020',
  pageTitle: 'Главная'
}

export type mainInitialTypes = typeof initialState

export const mainReducer = (state = initialState, action: any): mainInitialTypes => {
  switch (action.type) {
    default: {
      return {
        ...state
      }
    }
  }
}