import { Component } from 'preact'
import { Route, Router } from 'preact-router'
import { browserHistory } from '../history' // create this with history/createBrowserHistory
import { syncHistoryWithStore } from 'preact-router-redux'
import { Provider } from 'preact-redux'
import configureStore from '../store'
import Header from './header'
import Footer from './footer'
// Code-splitting is automated for routes
import Home from '../routes/home'
import Login from '../routes/login'

const store = configureStore()
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div id='app'>
          <Header />
          <div id='main'>
            <Router history={history}>
              <Route path='/' component={Home} />
              <Route path='/login' component={Login} />
            </Router>
          </div>
          <Footer />
        </div>
      </Provider>
    )
  }
}
