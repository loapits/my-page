const initialState = {
  items: [
    {id: 0, title: 'Home', link: '/'},
    {id: 1, title: 'CV', link: '/resume'},
    {id: 2, title: 'Portfolio', link: '/portfolio'},
    // {id: 4, title: 'Blog', link: '/blog'},
  ]
}

export type navigationInitialTypes = typeof initialState

export const navigationReducer = (state = initialState, action: any ): navigationInitialTypes => {
  switch (action.type) {
    default: 
      return {
        ...state
      }
  }
}