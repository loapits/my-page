import { SWITCH_IS_CHANGE } from "../state/action_types"

export type switchIsChangedType = {
  type: typeof SWITCH_IS_CHANGE
  payload: {
    isChanged: boolean
  }
}

export type burgerReducerTypes = switchIsChangedType