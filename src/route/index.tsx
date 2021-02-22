import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { AuthRoute } from './UnauthenticatedApp';
import { PrivateRoute } from './AuthanticatedApp';
import Login from '../module/auth/containers/Login';
import { AppConatiner } from '../module/core/App';
import Dashboard from '../module/dashboard/container';
import Movies from '../module/dashboard/components/Movies';

function hello() {
	let some = 'ddfdf';
}
class App extends Component {
	render() {
		return (
			<Switch>
				<PrivateRoute path="/profile" component={AppConatiner} />
				<AuthRoute path="/auth/login" component={() => <Login />} />
				<Route exact path="/" component={Dashboard} />
				<Route path="/movies" component={Movies} />
			</Switch>
		);
	}
}
function mapStateToProps(store: any) {
	return {
		user: store.auth.token,
	};
}
export default connect(mapStateToProps)(App);
