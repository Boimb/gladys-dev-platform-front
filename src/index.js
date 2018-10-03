import { h, Component } from 'preact'
import './style'
import { Provider } from 'preact-redux'
import configureStore from './store'
import { IntlProvider } from 'preact-i18n'
import definition from './language/fr.json' // TODO import language dynamicaly. e.g from store.
import App from './components/app'

const store = configureStore()

class Application extends Component {
  render () {
    return (
      <Provider store={store}>
        <IntlProvider definition={definition}>
          <App/>
        </IntlProvider>
      </Provider>
    )
  }
}

export default Application
