const initialState = {
  items: [
    {id: 0, title: 'Главная', link: '/'},
    {id: 1, title: 'Резюме', link: '/resume'},
    {id: 2, title: 'Портфолио', link: '/portfolio'}
  ]
}

export type navigationInitialTypes = typeof initialState

export const navigationReducer = (state = initialState, action: any ): navigationInitialTypes => {
  switch (action.type) {
    default: {
      return {
        ...state
      }
    }
  }
}