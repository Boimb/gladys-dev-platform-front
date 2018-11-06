import { combineReducers } from 'redux';
import userReducer from './user';
import notificationReducer from './notification';

const reducers = combineReducers({
  user: userReducer,
  notification: notificationReducer
});

export default reducers;
