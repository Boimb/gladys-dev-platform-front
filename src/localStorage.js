// import { defaultState } from './reducers/user';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('gladys-developpers');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.warn('loadState err', err);
    // TODO maybe log this somewhere
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('gladys-developpers', serializedState);
  } catch (err) {
    console.warn('saveState err', err);
    // TODO maybe log this somewhere
  }
};