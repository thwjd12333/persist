import { combineReducers } from 'redux'
import counter from './counter'
import counter2 from './test'

const rootReducer = combineReducers({
  counter,
  counter2,
})

export default rootReducer
