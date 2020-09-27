import { SET_NAVIGATION_ITEMS } from "../state/action_types"

export type NavigationItem = {
  id: number
  link: string
  title: string
}

type SetNavigationItems = {
  type: typeof SET_NAVIGATION_ITEMS
  payload: {
    items: Array<NavigationItem>
  }
}

export type NavigationItems = Array<NavigationItem>

export type NavigationReducer = SetNavigationItems