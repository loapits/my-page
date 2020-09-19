const initialState = {
  projects: [
    {title: 'Carriage', description: 'first proj', img: 'url', type: 'Pet-project', lighthouse: 'one'}
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