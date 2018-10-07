import { Component } from 'preact';
import { connect } from 'preact-redux';
// import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Footer from '../footer/index';
import { route, Router } from 'preact-router';
import Nav from '../../shared/components/nav/index';
import SiteHead from '../../shared/components/header/index';
// Code-splitting is automated for routes
import Home from '../../routes/home/index';
import Login from '../../routes/login/index';
import { IntlProvider } from 'preact-i18n';
import definition from '../../language/fr.json'; // TODO import language dynamicaly. e.g from store.

import './app.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {navMini: false};
  }

  toggleNav = (e) => {
    e.preventDefault();
    this.setState({navMini: !this.state.navMini});
  };

  hideNav = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({navMini: false});
  };

  handleRoute = e => {
    // not logged users are routed to login
    e.url !== '/login' && !this.props.isLogged && route('/login', true);
  };

  render () {
    let navMini = this.state.navMini;

    return (
      <IntlProvider definition={definition}>
        <div className='app-wrapper'>
          <Nav mini={navMini} toggleNav={this.toggleNav}/>
          <div className={`content-container ${navMini ? 'full' : ''}`}>
            {/* dropshadow for mobile nav triggering */}
            <div className="menu-dropshadow"
                 style={{display: (navMini ? 'block' : 'none')}}
                 onClick={this.hideNav}/>
            <SiteHead toggleNav={this.toggleNav}/>
            <Router onChange={this.handleRoute}>
              <Login path="/login"/>
              <Home path="/"/>
            </Router>
            {/*Keep react-router imlementation in case rollback*/}
            {/*<Switch>*/}
            {/*<Route path="/login" component={Login} />*/}
            {/*<Route path="/" component={Home} />*/}
            {/*</Switch>*/}
            <Footer/>
          </div>
        </div>


        {/*<div id="app">*/}
        {/*<Header />*/}
        {/*<Router onChange={this.handleRoute}>*/}
        {/*<Login path="/login" />*/}
        {/*<Home path="/" />*/}
        {/*</Router>*/}
        {/*Keep react-router imlementation in case rollback*/}
        {/*<Switch>*/}
        {/*<Route path="/login" component={Login} />*/}
        {/*<Route path="/" component={Home} />*/}
        {/*</Switch>*/}
        {/*<Footer/>*/}
      {/*</div>*/}
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
});

export default connect(mapStateToProps)(App);
