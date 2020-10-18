// Core
import { combineReducers } from 'redux'
// Reducers
import { appReducer } from './app-reducer'

export const rootReducer = combineReducers({
  app: appReducer,
})
