// Core
import { combineReducers } from 'redux'
// Reducers
import { appReducer } from './app-reducer'
import { mainReducer } from './main-reducer'

export const rootReducer = combineReducers({
  app: appReducer,
  main: mainReducer,
})
