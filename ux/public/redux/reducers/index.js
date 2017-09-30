import { combineReducers } from 'redux';
import userReducers from './userReducers.js';
import githubUsers from './githubUsers.js';

const reducers = combineReducers({
	userReducers,
	githubUsers
})

export default reducers;