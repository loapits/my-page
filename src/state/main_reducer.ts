import { mainApi } from '../api/api'
import { MainItems, MainReducer } from '../types/main'
import { SET_MAIN_STATE } from './action_types'

const initialState = {} as MainItems

export type MainInitial = typeof initialState

export const mainReducer = (state = initialState, action: MainReducer): MainInitial => {
  switch (action.type) {
    case SET_MAIN_STATE: {
      return {
        ...state,
        logo: action.payload.logo,
        title: action.payload.title,
        copyright: action.payload.copyright,
        alt: action.payload.alt
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

const setMain = (main: MainItems) => ({
  type: SET_MAIN_STATE,
  payload: {
    logo: main.logo, 
    title: main.title, 
    copyright: main.copyright, 
    alt: main.alt
  }
})

export const getMain = () => async (dispatch: Function) => {
  const response = await mainApi.getMain()
  dispatch(setMain(response))
}