import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { reducers } from './reducers'
import { routerMiddleware, routerReducer } from 'preact-router-redux'
import { browserHistory } from './history'

const loggerMiddleware = createLogger()

export default function configureStore (preloadedState) {
  return createStore(
    combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(browserHistory),
      loggerMiddleware
    )
  )
}
