import { combineReducers } from 'redux';
import contact from './contact.reducer';
import users from './users.reducer';
import notifications from './notification.reducer';
import site from './site.reducer';
import translations from './translations.reducer';

const appReducers = combineReducers({
    users,
    contact,
    notifications,
    site,
    translations
});

export default appReducers;