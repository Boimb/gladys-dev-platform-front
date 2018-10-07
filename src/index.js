import './style'
import Root from './components/root'
import configureStore from './store'

const store = configureStore();

const Application = () => (<Root store={store} />)

export default Application
