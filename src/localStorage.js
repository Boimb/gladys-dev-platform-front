export const loadState = () => {
  console.log('loading State')
  try {
    const serializedState = localStorage.getItem('gladys-dev-platform');
    if (serializedState === null) {
      return undefined;
    }
    console.log('State equals to ', JSON.parse(serializedState))
    return JSON.parse(serializedState);
  } catch (err) {
    console.warn('loadState err', err)
    // TODO maybe log this somewhere
    return undefined;
  }
};

export const saveState = (state) => {
  console.log('saving State')
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('gladys-dev-platform', serializedState)
    console.log('saved State equals to ', state)
  } catch (err) {
    console.warn('saveState err', err)
    // TODO maybe log this somewhere
  }
}