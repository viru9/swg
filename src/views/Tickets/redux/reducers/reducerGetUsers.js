import {FETCH_TICKETS, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILED} from './../types';

export default (state = { fetch: false, error: null, targets: {} }, action) => {
    switch (action.type) {
        case FETCH_TICKETS:
            return Object.assign({}, state, { fetch: true, error: null });
        case FETCH_TICKETS_SUCCESS:
            return Object.assign({}, state, { fetch: false, error: null, targets: action });
        case FETCH_TICKETS_FAILED:
            return Object.assign({}, state, { fetch: false, error: action, targets: null });
        default:
            return state;
    }
}