import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Login from '../routes/login';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render () {
		return (
			<div id="app">
				<Header />
				<div id="main">
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Login path="/login" />
					</Router>
				</div>
				<Footer />
			</div>
		);
	}
}