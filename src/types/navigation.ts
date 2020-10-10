import { SET_NAVIGATION } from "../state/action_types"

export type NavigationItem = {
  id: number
  link: string
  title: string
}

type SetNavigation = {
  type: typeof SET_NAVIGATION
  payload: {
    logo: string
    items: Array<NavigationItem>
  }
}

export type Navigation = {
  logo: string,
  items: Array<NavigationItem>
}

export type NavigationItems = Array<NavigationItem>

export type NavigationReducer = SetNavigation