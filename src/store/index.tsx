import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducers } from '../root-reducers';
import logger from 'redux-logger';

export const store = createStore(
	appReducers,
	{},
	applyMiddleware(thunk, logger)
);
