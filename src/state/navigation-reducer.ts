const initialState = {
  items: [
    {id: 0, title: 'Home', link: '/', isChecked: false},
    {id: 4, title: 'Resume', link: '/resume', isChecked: false},
    {id: 2, title: 'Portfolio', link: '/portfolio', isChecked: false},
    // {id: 3, title: 'Blog', link: '/blog', isChecked: false},
    {id: 1, title: 'About me', link: '/about_me', isChecked: false}
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