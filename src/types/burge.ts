import { SWITCH_IS_CHANGE } from "../state/action_types"

export type SwitchingChange = {
  type: typeof SWITCH_IS_CHANGE
  payload: {
    isChanged: boolean
  }
}

export type Burger = {
  isChanged: boolean
}

export type BurgerReducer = SwitchingChange