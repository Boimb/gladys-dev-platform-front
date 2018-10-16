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
