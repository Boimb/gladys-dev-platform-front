import { REQUEST_AUTH, AUTH_SUCCEEDED, AUTH_FAILED } from '../actions/login'

const defaultState = {
  isLogged: false,
  fetching: false
}

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_AUTH:
      console.log('action: ', action)
      return {
        isLogged: false,
        fetching: true
      }

    case AUTH_FAILED:
      console.log('action: ', action)
      return {
        isLogged: false,
        fetching: false
      }

    case AUTH_SUCCEEDED:
      console.log('action: ', action)
      return {
        isLogged: true,
        fetching: false
      }

    default:
      return state
  }
}

export default loginReducer