import thunk from 'redux-thunk'
import {combineReducers, createStore, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { navigationReducer } from './navigation_reducer'
import { mainReducer } from './main_reducer'
import { optionsReducer } from './options_reducer'
import { portfolioReducer } from './portfolio_reducer'
import { resumeReducer } from './resume_reducer'
import { burgerReducer } from './burger_reducer'

export const reducers = combineReducers({
  main: mainReducer,
  options: optionsReducer,
  portfolio: portfolioReducer,
  resume: resumeReducer,
  burger: burgerReducer,
  navigation: navigationReducer
})

export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
))