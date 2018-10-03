import axios from 'axios'


export const REQUEST_AUTH = 'REQUEST_AUTH'
export const AUTH_SUCCEEDED = 'AUTH_SUCCEEDED'
export const AUTH_FAILED = 'AUTH_FAILED'


export const authenticate = (credentials) => {
  return dispatch => {
    // first tell app we're requesting auth
    dispatch(requestAuth(credentials))

    return axios.post('http://localhost:8080/login', credentials)
      .then(response => response.json())
      .then(json => dispatch(authSuccess(json)))
      .catch(err => {
        // TODO add log system
        console.log(err)
        return {type: 'LOGOUT'}
    })
  }
}


/**************************************
 * Action creators
 *
 * Functions that creates actions.
 *
 ***************************************/

/**
 * Authentication process initiated
 * @param credentials
 */
const requestAuth = (credentials) => ({
  type: REQUEST_AUTH,
  credentials
})

/**
 * Authentication process succeded
 * @param user
 */
const authSuccess = (user) => ({
  type: AUTH_SUCCEEDED,
  user
})

/**
 * Authentication process failed
 * @param credentials
 */
const authFailed = (credentials) => ({
  type: AUTH_FAILED,
  credentials
})

