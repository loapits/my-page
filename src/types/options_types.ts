import { SWITCH_IS_SHOW_SOCIAL } from "../state/action_types"

export type switchValuesType = {
  type: typeof SWITCH_IS_SHOW_SOCIAL
  payload: {
    isShowingSocials: boolean
  }
}

export type optionsLinksType = {
  id: number
  class1: string
  class2: string
  link: string
  alt: string
  isShow: boolean
}

export type optionsReducerTypes = switchValuesType