import { resumeApi } from '../api/api'
import { SET_RESUME_STATE } from './action_types'
import { ResumeObject, ResumeReduce } from '../types/resume'

const initialState = {
  resume: {} as ResumeObject
}

export type ResumeInitial = typeof initialState

export const resumeReducer = (state = initialState, action: ResumeReduce): ResumeInitial => {  
  switch (action.type) {
    case SET_RESUME_STATE: {
      return {
        ...state,
        resume: action.payload.resume
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

const setResume = (resume: ResumeObject) => ({
  type: SET_RESUME_STATE,
  payload: {
    resume: resume
  }
})

export const getResume = () => async (dispatch: Function) => {
  const response = await resumeApi.getResume()
  dispatch(setResume(response))
}