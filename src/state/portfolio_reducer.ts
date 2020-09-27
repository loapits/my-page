import { SET_PORTFOLIO_STATE, SWITCH_IS_DISPLAY } from './action_types'
import { PorjectsObject, PortfolioReducer, ProjectsItem } from '../types/portfolio'
import { porfolioApi } from '../api/api'

const initialState = {
  projects: [] as PorjectsObject
}

export type PortfolioInitial = typeof initialState

export const portfolioReducer = (state = initialState, action: PortfolioReducer): PortfolioInitial => {
  switch (action.type) {
    case SWITCH_IS_DISPLAY: {
      return {
        ...state,
        projects: state.projects.map((el: ProjectsItem) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              isDisplay: true
            }
          } else {
            return {
              ...el,
              isDisplay: false
            }
          }
        })
      }
    }
    case SET_PORTFOLIO_STATE: {
      return {
        ...state,
        projects: action.payload.projects
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export const switchDisplayng = (id: number) => ({
  type: SWITCH_IS_DISPLAY,
  payload: {
    id: id
  }
})

const setPortfolio = (projects: Array<object>) => ({
  type: SET_PORTFOLIO_STATE,
  payload: {
    projects: projects
  }
})

export const getPortfolio = () => async (dispatch: Function) => {
  const response = await porfolioApi.getPortfolio()
  dispatch(setPortfolio(response))
}