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
    links: {
      site: string,
      repository: string
    }
    duration: {
      from: string
      to: string
    }
    task: {
      title: string
      body: string
    }
    body: {
      title: string
      body: string
    }
    tools: {
      title: string
      body: string
    }
  }
  img: {
    src: string
    alt: string
  }
  type: string
  isDisplay: boolean
}