import { Component } from 'preact';
import { connect } from 'preact-redux';
// import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Footer from '../../components/footer';
import { route, Router } from 'preact-router';
import Nav from '../../shared/components/nav/index';
import HeaderContainer from '../../containers/header';
// Code-splitting is automated for routes
import Home from '../../routes/home';
import Login from '../../routes/login';
import Signup from '../../routes/signup';
import Profile from '../../routes/profile';
import { IntlProvider } from 'preact-i18n';
import definition from '../../language/fr.json'; // TODO import language dynamicaly. e.g from store.
import NotificationSystem from'react-notification-system';

import './app.scss';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {navMini: false};
    this.notificationSystem = null;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notifications.length > this.props.notifications.length) {
      const notif = nextProps.notifications[nextProps.notifications.length - 1];
      this.notificationSystem.addNotification({
        message: notif.message,
        level: notif.level || 'success',
        position: notif.position || 'tr',
        autoDismiss: notif.autoDismiss || 4,
        uid: notif.uid
      });
    }
  }

  setNotificationRef = el => {
    if (el) {
      this.notificationSystem = el;
    }
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
    // e.url === '/login' && !this.props.isLogged && route('/login', true);
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
            <HeaderContainer toggleNav={this.toggleNav}/>
            <Router onChange={this.handleRoute}>
              <Home path="/"/>
              <Login path="/login"/>
              <Signup path="/signup"/>
              <Profile path="/profile"/>
            </Router>
            <Footer/>
          </div>
          <NotificationSystem ref={this.setNotificationRef} />
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: !!state.user.isLogged,
  notifications: state.notification.notifications || {}
});

export default connect(mapStateToProps)(App);
