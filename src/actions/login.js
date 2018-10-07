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
