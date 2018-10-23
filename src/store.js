import { loadState, saveState } from './localStorage';
import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import monitorReducerEnhancer from './enhancers/monitorReducer';
import rootReducer from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const persistedStore = loadState();

const store = configureStore(persistedStore);
store.subscribe(() => {
  saveState(store.getState());
});

function configureStore (preloadedState) {

  const loggerMiddleware = createLogger();
  /**
   * Axios client
   * @type {AxiosInstance}
   */
  const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL: 'http://localhost:8080/',
    responseType: 'json',
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-cache'
    },
  });

  client.interceptors.request.use(function (config) {
    let newConf = config
    if (store.getState() && store.getState().user &&
      store.getState().user.isLogged && store.getState().user.access_token) {
      newConf = {
        ...newConf,
        headers: {
          ...config.headers,
          Authorization: `JWT ${preloadedState.user.access_token}`,
        },
      };
    }
    return newConf;
  });

  const middlewares = [
    loggerMiddleware,
    thunkMiddleware,
    axiosMiddleware(client),
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedEnhancers = composeEnhancers(...enhancers);

  return createStore(rootReducer, preloadedState, composedEnhancers);
}

export default store;