import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchValues } from '../state/options_reducer'
import styles from '../style/Options.module.scss'
import { stateType } from '../types/state_types'
import { optionsLinksType } from '../types/options_types'

export const Options = React.memo(() => {
  const options = useSelector((state: stateType) => state.options.links)
  const isShowingSocials = useSelector((state: stateType) => state.options.isShowingSocials)
  const isChanged = useSelector((state: stateType) => state.burger.isChanged)
  const dispatch = useDispatch()

  const switchIsShowingSocials = () => {
    dispatch(switchValues(!isShowingSocials))
  }

  const switchBgButton = !isChanged ? styles.options_white : styles.options_grey
  const switchBgLink = !isChanged ? styles.btn_white : styles.btn_grey
  const switchLogo = !isShowingSocials ? styles.socials : styles.back

  return(
    <div className={styles.options+' '+switchBgButton}>
      <div className={styles.options__dividers}>
				<svg className={styles.options__firstDivider}>
					<path className={styles.firstPath} d="M0 0 L50 50"></path>
					<path className={styles.secondPath} d="M50 50 L100 100"></path> 
				</svg>
				<svg className={styles.options__secondDivider}>
					<path className={styles.thirdPath} d="M0 100 L50 50"></path>
					<path className={styles.fourPath} d="M100 0 L50 50"></path>
				</svg>
      </div>
      <div className={styles.options__links}>
        <button onClick={switchIsShowingSocials} className={[switchLogo, switchBgLink].join(' ')}></button>
        {options.map((el: optionsLinksType) => 
          // eslint-disable-next-line
          <a key={el.id} href={el.link} className={[el.class1, el.class2, switchBgLink].join(' ')}></a>
        )}
      </div> 
    </div>
  )
})