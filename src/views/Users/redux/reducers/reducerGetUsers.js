import {FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED} from './../types';

export default (state = { fetch: false, error: null, targets: {} }, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return Object.assign({}, state, { fetch: true, error: null });
        case FETCH_USERS_SUCCESS:
            return Object.assign({}, state, { fetch: false, error: null, targets: action });
        case FETCH_USERS_FAILED:
            return Object.assign({}, state, { fetch: false, error: action, targets: null });
        default:
            return state;
    }
}