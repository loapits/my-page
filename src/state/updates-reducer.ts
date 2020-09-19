const initialState = {
  list: [
    {id: 0, date: new Date(), type: 'type', title: 'title', main: 'main'}
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