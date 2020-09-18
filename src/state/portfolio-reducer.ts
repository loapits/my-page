const initialState = {
  projects: [
    {projectTitle: 'Carriage', projectDescription: 'first proj', projectImg: 'url', projectType: 'Pet-project', projectLighthouse: 'one'}
  ]
}

export type portfolioInitialTypes = typeof initialState

export const portfolioReducer = (state = initialState, action: any): portfolioInitialTypes => {
  switch (action.type) {
    default:
      return {
        ...state
      }
  }
}