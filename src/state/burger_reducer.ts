import { burgerReducerTypes } from "../types/burger_types"
import { SWITCH_IS_CHANGE, SET_BURGER_STATE } from "./action_types"

export const initialState = {
  isChanged: false 
}


export type burgerInitialTypes = typeof initialState

export const burgerReducer = (state = initialState, action: burgerReducerTypes): burgerInitialTypes => {
  switch (action.type) {
    case SET_BURGER_STATE: {
      return {
        ...state,
        isChanged: action.payload.isChanged
      }
    }
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