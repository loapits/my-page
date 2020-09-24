import { IResumeItem } from "../interfaces/resume_iterfaces"

export type resumeItemPropsType = {
  item: {
    title: string
    list: Array<object>
  }
}

type Resume<T> = {
  [P in keyof T]?: T[P]
}

export type ResumeItemType = Resume<IResumeItem>