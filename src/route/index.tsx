import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { AuthRoute } from './UnauthenticatedApp';
import { PrivateRoute } from './AuthanticatedApp';
import Login from '../module/auth/containers/Login';
import { AppConatiner } from '../module/core/App';

function hello() {
	let some = 'ddfdf';
}
class App extends Component {
	render() {
		return (
			<Switch>
				<PrivateRoute path="/db" component={AppConatiner} />
				<AuthRoute path="/auth/login" component={() => <Login />} />
				<Route render={() => <Redirect to="/db" />} />
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
