// Core
import { combineReducers } from 'redux'
// Reducers
import { appReducer } from './app-reducer'
import { mainReducer } from './main-reducer'
import { authReducer } from './auth-reducer'

export const rootReducer = combineReducers({
  app: appReducer,
  main: mainReducer,
  auth: authReducer,
})
