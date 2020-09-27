import { burgerApi } from "../api/api"
import { Burger, BurgerReducer } from "../types/burger"
import { SWITCH_IS_CHANGE } from "./action_types"

export const initialState = {
  // isChanged: false 
} as Burger

export type BurgerInitial = typeof initialState

export const burgerReducer = (state = initialState, action: BurgerReducer): BurgerInitial => {
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

export const getIsChanged = () => async (dispatch: Function) => {
  const responce = await burgerApi.getBurger()
  
  dispatch(switchIsChanged(responce.isChanged))
}