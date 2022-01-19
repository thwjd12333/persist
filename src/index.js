import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import rootReducer from './reducers'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './store'
const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
