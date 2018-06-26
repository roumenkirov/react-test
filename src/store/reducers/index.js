import { combineReducers } from 'redux';

import usersReducer from './users';
import cinemasReducer from './cinemas';
import accountReducer from './account';

export default combineReducers({
    users: usersReducer,
    cinemas: cinemasReducer,
    account: accountReducer
});
