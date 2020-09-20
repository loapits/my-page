import thunk from 'redux-thunk'
import {combineReducers, createStore, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { navigationReducer } from './navigation-reducer'
import { mainReducer } from './main-reducer'
import { optionsReducer } from './options-reducer'
import { portfolioReducer } from './portfolio-reducer'
import { resumeReducer } from './resume-reducer'
import { aboutMeReducer } from './aboutme-reducer'
import { burgerReducer } from './burger-reducer'

export const reducers = combineReducers({
  main: mainReducer,
  options: optionsReducer,
  portfolio: portfolioReducer,
  resume: resumeReducer,
  aboutMe: aboutMeReducer,
  burger: burgerReducer,
  navigation: navigationReducer  
})

export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))