// import { AUTH_FAILED, AUTH_SUCCEEDED, REQUEST_AUTH } from '../actions/login';
import {
  REQUEST_AUTH,
  REQUEST_AUTH_FAIL,
  REQUEST_AUTH_SUCCESS
} from '../actions/login';
import { SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS } from '../actions/signup';

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

    case SIGNUP:
      return {
        isLogged: false,
        fetching: true
      };
    case SIGNUP_SUCCESS:
      return {
        isLogged: false,
        fetching: false,
        ...action.payload.data
      };
    case SIGNUP_FAIL:
      return {
        isLogged: false,
        fetching: false
      };

    default:
      return state;
  }
};

export default userReducer;
