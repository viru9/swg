import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import userList from './views/Users/redux/reducers/reducerGetUsers';
import organizationList from './views/Organizations/redux/reducers/reducerGetOrganizations';
import ticketList from './views/Tickets/redux/reducers/reducerGetUsers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    userList: userList,
    organizationList: organizationList,
    ticketList: ticketList
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;