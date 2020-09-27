import { SET_RESUME_STATE } from "../state/action_types"

interface IResumeListItem {
  id: number
  body: string
}

interface IContacts {
  title: string
  fullName: string
  number: string
  email: string
  socials: {
    github: string
    linkedin: string
  }
  location: string
}

interface IResumeKnowledgesItem {
  id: number
  title: string
  list: [{
    id: number 
    body: string
  }]
}

type SetResume = {
  type: typeof SET_RESUME_STATE,
  payload: {
    resume: ResumeObject
  }
}

export type ResumeReduce = SetResume

type Skills = IResumeKnowledgesItem
type Tools = IResumeKnowledgesItem
type Education = IResumeKnowledgesItem


export type ResumeObject = {
  title: string
  pageTitle: string
  avatar: string
  aboutMe: string
  contacts: IContacts
  skills: Skills
  tools: Tools
  education: Education
  alt: string
}

export type ResumeItemProps = {
  item: Skills | Tools | Education
}

type Resume<T> = {
  [P in keyof T]?: T[P]
}

export type ResumeComponentItem = Resume<IResumeListItem>

