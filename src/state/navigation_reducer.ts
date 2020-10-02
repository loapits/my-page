import { navigationApi } from "../api/api"
import { NavigationItems, NavigationReducer, Navigation } from "../types/navigation"
import { SET_NAVIGATION } from './action_types'

const initialState = {
  logo: '',
  items: [] as NavigationItems
} 

export type NavigationInitial = typeof initialState

export const navigationReducer = (state = initialState, action: NavigationReducer ): NavigationInitial => {
  switch (action.type) {
    case SET_NAVIGATION: {
      return {
        ...state,
        logo: action.payload.logo,
        items: action.payload.items
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

const setNavigation = (navigation: Navigation) => ({
  type: SET_NAVIGATION,
  payload: {
    logo: navigation['logo'],
    items: navigation['items']
  }
})

export const getNavigation = () => async (dispatch: Function) => {
  const response = await navigationApi.getNavigation()  
  dispatch(setNavigation(response))
}