import { Provider } from 'preact-redux';
import App from '../app';

const Root = ({store}) => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default Root;