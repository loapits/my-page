import { navigationApi } from "../api/api"
import { NavigationItems, NavigationItem, NavigationReducer } from "../types/navigation"
import { SET_NAVIGATION_ITEMS } from './action_types'

const initialState = {
  items: [] as NavigationItems
} 

export type NavigationInitial = typeof initialState

export const navigationReducer = (state = initialState, action: NavigationReducer ): NavigationInitial => {
  switch (action.type) {
    case SET_NAVIGATION_ITEMS: {
      return {
        ...state,
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

const setNavigation = (navigation: NavigationItem) => ({
  type: SET_NAVIGATION_ITEMS,
  payload: {
    items: navigation
  }
})

export const getNavigation = () => async (dispatch: Function) => {
  const response = await navigationApi.getNavigationItems()
  dispatch(setNavigation(response))
}