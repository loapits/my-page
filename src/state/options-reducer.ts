import styles from '../style/Options.module.scss'
const SWITCH_IS_SHOW_SOCIAL = 'SWITCH_IS_SHOW_SOCIAL'

const initialState = {
  isShowingSocials: false,
  links: [
    {id: 0, class1: styles.share, class2: styles.block, link: 'https://docs.google.com', alt: '', isShow: true},
    {id: 1, class1: styles.resume, class2: styles.block, link: 'https://docs.google.com/document/d/1J80dcJ7uXD3Oaoz94GtuBxBtyvdImQxNGWO1FyI1q3A/edit?usp=sharing', alt: '', isShow: true},
    {id: 2, class1: styles.gmail, class2: styles.block, link: 'mailto:gera59377@gmail.com', alt: '', isShow: true},
    {id: 3, class1: styles.github, class2: styles.none, link: 'https://github.com/loapits', alt: '', isShow: false},
    {id: 4, class1: styles.linkedin, class2: styles.none, link: 'https://www.linkedin.com/in/gkartashov', alt: '', isShow: false},
    {id: 5, class1: styles.telegram, class2: styles.none, link: 'https://t.me/loopits', alt: '', isShow: false}
  ]
}

export type optionsInitialTypes = typeof initialState

export const optionsReducer = (state = initialState, action: any): optionsInitialTypes => {
  switch (action.type) {
    case SWITCH_IS_SHOW_SOCIAL: {
      return {
        ...state,
        isShowingSocials: action.payload.isShowingSocials,
        links: state.links.map(el => {
          if (el.isShow === true) {
            return {
              ...el,
              isShow: false,
              class2: styles.none
            }
          } else {
            return {
              ...el,
              isShow: true,
              class2: styles.block
            }
          }
        })
      }
    }
    default:
      return {
        ...state
      }
  }
}

export const switchValues = (isShowingSocials: boolean) => ({
  type: SWITCH_IS_SHOW_SOCIAL,
  payload: {
    isShowingSocials
  }
})