import { IResumeItem } from "../interfaces/resume_iterfaces"
import { SET_RESUME_STATE } from "../state/action_types"

type setResumeState = {
  type: typeof SET_RESUME_STATE,
  payload: {
    resume: any
  }
}

export type resumeObjectType = {
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
  }
  img: string
  type: string
  isDisplay: boolean
}

export type resumeItemPropsType = {
  item: {
    title: string
    list: Array<object>
  }
}

type Resume<T> = {
  [P in keyof T]?: T[P]
}

export type ResumeComponentItemType = Resume<IResumeItem>

export type ResumeReduceType = setResumeState
