import { SWITCH_IS_DISPLAY } from "../state/action_types"

export type switchDisplayngTypes = {
  type: typeof SWITCH_IS_DISPLAY
  payload: {
    id: number
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
    tasks: string
    body: string
    tools: string
  },
  img: string
  type: string
  isDisplay: boolean
}

export type portfolioReducerTypes = switchDisplayngTypes