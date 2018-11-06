/**
 * Notification actions
 * @type {string}
 */
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export const addNotification = notification => ({
  type: ADD_NOTIFICATION,
  data: notification
});

export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const removeNotification = notification => ({
  type: CLEAR_NOTIFICATIONS,
  data: notification
});

export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS';

export const clearNotifications = () => ({
  type: CLEAR_NOTIFICATIONS,
  data: null
});