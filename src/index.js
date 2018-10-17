import Root from './components/root';
import configureStore from './store';
import { loadState, saveState } from './localStorage';

const persistedStore = loadState();
const store = configureStore(persistedStore);
store.subscribe(() => {
  saveState(store.getState());
});
const Application = () => (<Root store={store}/>);

export default Application;
