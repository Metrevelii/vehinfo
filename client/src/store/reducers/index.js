import { combineReducers } from 'redux';
import contact from './contact.reducer';
import users from './users.reducer';
import notifications from './notification.reducer'

const appReducers = combineReducers({
    users,
    contact,
    notifications
});

export default appReducers;