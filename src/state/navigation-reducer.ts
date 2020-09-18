const initialState = {
  navigationItems: [
    {id: 0, title: 'Home', link: '#', isChecked: false},
    {id: 1, title: 'About me', link: '#', isChecked: false},
    {id: 2, title: 'Portfolio', link: '#', isChecked: false},
    {id: 3, title: 'Blog', link: '#', isChecked: false},
    {id: 4, title: 'Resume', link: '#', isChecked: false}
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