import { Component } from 'preact'
import './style'
import { IntlProvider } from 'preact-i18n'
import definition from './language/fr.json' // TODO import language dynamicaly. e.g from store.
import App from './components/app'

class Application extends Component {
  render () {
    return (
      <IntlProvider definition={definition}>
        <App />
      </IntlProvider>
    )
  }
}

export default Application
