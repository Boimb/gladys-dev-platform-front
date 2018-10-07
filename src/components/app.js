import { Component } from 'preact';
import { connect } from 'preact-redux';
// import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import { route, Router } from 'preact-router';
// Code-splitting is automated for routes
import Home from '../routes/home';
import Login from '../routes/login';
import { IntlProvider } from 'preact-i18n';
import definition from '../language/fr.json'; // TODO import language dynamicaly. e.g from store.

class App extends Component {
  handleRoute = e => {
    // not logged users are routed to login
    e.url !== '/login' && !this.props.isLogged && route('/login', true);
  };

  render() {
    return (
      <IntlProvider definition={definition}>
        <div id="app">
          <Header />
          <Router onChange={this.handleRoute}>
            <Login path="/login" />
            <Home path="/" />
          </Router>
          {/*Keep react-router imlementation in case rollback*/}
          {/*<Switch>*/}
          {/*<Route path="/login" component={Login} />*/}
          {/*<Route path="/" component={Home} />*/}
          {/*</Switch>*/}
          <Footer />
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state.user.isLogged
});

export default connect(mapStateToProps)(App);
