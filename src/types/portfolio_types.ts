import { SET_PORTFOLIO_STATE, SWITCH_IS_DISPLAY } from "../state/action_types"

type switchDisplaingTypes = {
  type: typeof SWITCH_IS_DISPLAY
  payload: {
    id: number
  }
}

type setPortfolioState = {
  type: typeof SET_PORTFOLIO_STATE
  payload: {
    projects: Array<projectsItemType>
  }
}

export type projectsItemPropsTypes = {
  itemHeader: string
  itemData: string
}

export type projectsItemType = {
  id: number
  title: string
  description: {
    linkToSite: string
    linkToRepository: string
    duration: {
      from: string
      to: string
    }
    tasksTitle: string
    tasks: string
    bodyTitle: string
    body: string
    toolsTitle: string
    tools: string
  },
  img: string
  type: string
  isDisplay: boolean
  alt: string
}

export type portfolioReducerTypes = switchDisplaingTypes | setPortfolioState