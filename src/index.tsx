import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { App } from './App'
import { store } from './state/store'
import './assets/fonts/fordescription/Philosopher.css'
import './assets/fonts/YanoneKaffeesatz/YanoneKaffeesatz.css'
import 'normalize.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister() 
