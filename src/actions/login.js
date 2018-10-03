import axios from 'axios'
import { push } from 'preact-router-redux'

export const REQUEST_AUTH = 'REQUEST_AUTH'
export const AUTH_SUCCEEDED = 'AUTH_SUCCEEDED'
export const AUTH_FAILED = 'AUTH_FAILED'

export const authenticate = (credentials) => {
  return dispatch => {
    // first tell app we're requesting auth
    dispatch(requestAuth(credentials))
    const config = {
      headers: {
        Authorization: `Bearer ${'token'}`,
        'Content-Type': 'application/json'
      }
    }
    return axios.post('http://localhost:8080/login', credentials, config)
      .then(response => {
        dispatch(authSuccess(response.data))
        dispatch(push('/'))
      })
      .catch(error => {
        // TODO add error handling
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
        dispatch(authFailed(credentials))
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
