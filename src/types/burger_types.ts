import { SWITCH_IS_CHANGE, SET_BURGER_STATE } from "../state/action_types"

export type switchIsChangedType = {
  type: typeof SWITCH_IS_CHANGE
  payload: {
    isChanged: boolean
  }
}

export type setBurgerState = {
  type: typeof SET_BURGER_STATE
  payload: {
    isChanged: boolean
  }
}

export type burgerReducerTypes = switchIsChangedType | setBurgerState