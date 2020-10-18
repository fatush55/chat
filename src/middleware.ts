// Core
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { Middleware } from 'redux'

const sagaMiddleware = createSagaMiddleware()

const devEnvironment = process.env.NODE_ENV === 'development'

const middleware: Middleware[] = [sagaMiddleware]

if (devEnvironment) {
  middleware.push(logger)
}

export { middleware, sagaMiddleware }
