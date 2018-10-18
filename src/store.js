import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import rootReducer from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL: 'http://localhost:8080/',
  responseType: 'json',
  headers: {
    Authorization: `Bearer ${'token'}`,
    'Content-Type': 'application/json',
  },
});

const loggerMiddleware = createLogger();
export default function configureStore (preloadedState) {

  const middlewares = [
    loggerMiddleware,
    thunkMiddleware,
    axiosMiddleware(client),
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers = compose(...enhancers);

  return createStore(rootReducer, preloadedState, composedEnhancers);
}
