const SWITCH_IS_CHANGE = 'SWITCH_IS_CHANGE'

const initialState = {
  isChanged: false
}

export type burgerInitialTypes = typeof initialState

export const burgerReducer = (state = initialState, action: any): burgerInitialTypes => {
  switch (action.type) {
    case SWITCH_IS_CHANGE: {
      return {
        ...state,
        isChanged: action.payload.isChanged
      }
    }
    default:
      return {
        ...state
      }
  }
}

export const switchIsChanged = (isChanged: boolean) => ({
  type: SWITCH_IS_CHANGE,
  payload: {
    isChanged
  }
})