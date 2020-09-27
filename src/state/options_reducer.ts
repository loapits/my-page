import { optionsApi } from "../api/api"
import { Options, optionsReducerTypes } from "../types/options"
import { SWITCH_IS_SHOW_SOCIAL, SET_OPTIONS } from "./action_types"

const initialState = {} as Options

export type OptionsInitial = typeof initialState

export const optionsReducer = (state = initialState, action: optionsReducerTypes): OptionsInitial => {
  switch (action.type) {
    case SET_OPTIONS: {
      return {
        ...state,
        isShowingSocials: action.payload.isShowingSocials,
        links: action.payload.links
      }
    }
    case SWITCH_IS_SHOW_SOCIAL: {
      return {
        ...state,
        isShowingSocials: action.payload.isShowingSocials,
        links: state.links.map(el => {
          if (el.isShow === true) {
            return {
              ...el,
              isShow: false,
              class2: 'none'
            }
          } else {
            return {
              ...el,
              isShow: true,
              class2: 'block'
            }
          }
        })
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export const switchValues = (isShowingSocials: boolean) => ({
  type: SWITCH_IS_SHOW_SOCIAL,
  payload: {
    isShowingSocials
  }
})

const setOptions = (options: Options) => ({
  type: SET_OPTIONS,
  payload: {
    isShowingSocials: options.isShowingSocials,
    links: options.links
  }
})

export const getOptions = () => async (dispatch: Function) => {
  const response = await optionsApi.getOptions()
  dispatch(setOptions(response))
}