import { burgerReducerTypes } from "../types/burger_types"
import { SWITCH_IS_CHANGE } from "./action_types"

export const initialState = {
  isChanged: false
}

export type burgerInitialTypes = typeof initialState

export const burgerReducer = (state = initialState, action: burgerReducerTypes): burgerInitialTypes => {
  switch (action.type) {
    case SWITCH_IS_CHANGE: {
      return {
        ...state,
        isChanged: action.payload.isChanged
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export const switchIsChanged = (isChanged: boolean) => ({
  type: SWITCH_IS_CHANGE,
  payload: {
    isChanged
  }
})