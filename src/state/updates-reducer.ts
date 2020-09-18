const initialState = {
  updatesList: [
    {id: 0, date: new Date(), type: 'type', updateTitle: 'title', updateMain: 'main'}
  ]
}

export  type updatesInitialTypes = typeof initialState

export const updatesReducer = (state = initialState, action: any): updatesInitialTypes => {
  switch (action.type) {
    default:
      return {
        ...state
      }
  }
}