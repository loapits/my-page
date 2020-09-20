const initialState = {
  items: [
    {id: 0, title: 'Home', link: '/'},
    {id: 1, title: 'Resume', link: '/resume'},
    {id: 2, title: 'Portfolio', link: '/portfolio'},
    {id: 3, title: 'Updates', link: '/updates'},
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