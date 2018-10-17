/**
 * Signup actions
 * @type {string}
 */
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

/**
 * Authentication action creator
 * @param credentials
 */
export const signup = ({ name, email, password, language }) => ({
  type: SIGNUP,
  payload: {
    request: {
      method: 'POST',
      url: '/signup',
      data: { name, email, password, language }
    }
  }
});

/**
 * Authentication actions
 * @type {string}
 */
export const REQUEST_AUTH = 'REQUEST_AUTH';
export const REQUEST_AUTH_SUCCESS = 'REQUEST_AUTH_SUCCESS';
export const REQUEST_AUTH_FAIL = 'REQUEST_AUTH_FAIL';

/**
 * Authentication action creator
 * @param credentials
 */
export const authenticate = credentials => ({
  type: REQUEST_AUTH,
  payload: {
    request: {
      method: 'POST',
      url: '/login',
      data: {
        ...credentials
      }
    }
  }
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});
