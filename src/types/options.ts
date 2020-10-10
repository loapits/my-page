import { SWITCH_IS_SHOW_SOCIAL, SET_OPTIONS } from "../state/action_types"

type SwitchValues = {
  type: typeof SWITCH_IS_SHOW_SOCIAL
  payload: {
    isShowingSocials: boolean
  }
}

type SetOptions = {
  type: typeof SET_OPTIONS
  payload: {
    isShowingSocials: boolean
    links: Array<OptionsLinks>
  }
}

export type OptionsLinks = {
  id: number
  class1: string
  class2: string
  link: string
  alt: string
  isShow: boolean
  ariaLabel: string
}

export type Options = {
  isShowingSocials: boolean
  links: Array<OptionsLinks>
}

export type optionsReducerTypes = SwitchValues | SetOptions