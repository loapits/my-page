import { SET_PORTFOLIO_STATE, SWITCH_IS_DISPLAY } from "../state/action_types"

type SwitchDisplaing = {
  type: typeof SWITCH_IS_DISPLAY
  payload: {
    id: number
  }
}

type SetPortfolio = {
  type: typeof SET_PORTFOLIO_STATE
  payload: {
    projects: PorjectsObject
  }
}

export type PortfolioReducer = SwitchDisplaing | SetPortfolio

export type PorjectsObject = Array<ProjectsItem>

export type ProjectsItemProps = {
  itemHeader: string
  itemData: string
}

export type ProjectsItem = {
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