// import { AUTH_FAILED, AUTH_SUCCEEDED, REQUEST_AUTH } from '../actions/login';
import {
  REQUEST_AUTH,
  REQUEST_AUTH_SUCCESS,
  REQUEST_AUTH_FAIL
} from '../actions/login';

const defaultState = {
  isLogged: false,
  fetching: false
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        isLogged: false,
        fetching: true
      };

    case REQUEST_AUTH_FAIL:
      return {
        isLogged: false,
        fetching: false
      };

    case REQUEST_AUTH_SUCCESS:
      return {
        isLogged: true,
        fetching: false,
        ...action.payload.data
      };

    default:
      return state;
  }
};

export default userReducer;
