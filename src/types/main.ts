import { SET_MAIN_STATE } from '../state/action_types'

type SetMain = {
  type: typeof SET_MAIN_STATE
  payload: MainItems
}

export type MainReducer = SetMain

export type MainItems = {
  logo: string
  title: string
  copyright: string
  alt: string
}