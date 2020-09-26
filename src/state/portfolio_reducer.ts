// import carriage from '../assets/img/portfolio/carriage.png'
// import simon from '../assets/img/portfolio/simon_games.png'
// import textshifter from '../assets/img/portfolio/textshifter.png'
// import mars_rovers from '../assets/img/portfolio/mars_rovers.png'
// import smart_trading from '../assets/img/portfolio/smart_trading.png'
import { SET_PORTFOLIO_STATE, SWITCH_IS_DISPLAY } from './action_types'
import { portfolioReducerTypes, projectsItemType } from '../types/portfolio_types'
import { porfolioApi } from '../api/api'

const initialState = {
  pageTitle: 'Портфолио',
  projects: [] as Array<projectsItemType>
}

export type portfolioInitialTypes = typeof initialState

export const portfolioReducer = (state = initialState, action: portfolioReducerTypes): portfolioInitialTypes => {
  switch (action.type) {
    case SWITCH_IS_DISPLAY: {
      return {
        ...state,
        projects: state.projects.map((el: projectsItemType) => {
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
  dispatch(setPortfolio(response.data))
}