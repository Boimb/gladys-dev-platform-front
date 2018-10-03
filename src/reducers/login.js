import { AUTH_FAILED, AUTH_SUCCEEDED, REQUEST_AUTH } from '../actions/login'

const defaultState = {
  isLogged: false,
  fetching: false
}

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        isLogged: false,
        fetching: true
      }

    case AUTH_FAILED:
      return {
        isLogged: false,
        fetching: false
      }

    case AUTH_SUCCEEDED:
      return {
        isLogged: true,
        fetching: false,
        ...action.user
      }

    default:
      return state
  }
}

export default loginReducer
