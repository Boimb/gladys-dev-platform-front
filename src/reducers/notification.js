import { ADD_NOTIFICATION, REMOVE_NOTIFICATION, CLEAR_NOTIFICATIONS
} from '../actions/notification';

const defaultState = {
  notifications: []
};

const notificationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        notifications: state.notifications.concat([action.data])
      };

    case REMOVE_NOTIFICATION:
      return {
        notifications: state.notifications.filter(n => n.uid !== action.data.uid)
      };

    case CLEAR_NOTIFICATIONS:
      return {
        notifications: []
      };
    default:
      return state;
  }
};

export default notificationReducer;