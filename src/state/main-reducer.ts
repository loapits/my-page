import logo from '../assets/icons/logo.png'

const initialState = {
  logoSrc: logo,
  headTitle: 'Georgiy Kartashov',
  copyright: 'Ⓒ Georgiy Kartashov, 2020'
}

export type mainInitialTypes = typeof initialState

export const mainReducer = (state = initialState, action: any): mainInitialTypes => {
  switch (action.type) {
    default:
      return {
        ...state
      }
  }
}