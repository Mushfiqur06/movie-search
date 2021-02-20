import { combineReducers } from 'redux';
import { auth } from '../module/auth/reducers';

export const appReducers = combineReducers({
	auth: auth,
});
