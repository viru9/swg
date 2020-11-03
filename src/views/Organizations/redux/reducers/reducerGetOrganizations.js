import {FETCH_ORGANIZATION, FETCH_ORGANIZATION_SUCCESS, FETCH_ORGANIZATION_FAILED} from '../types';

export default (state = { fetch: false, error: null, targets: {} }, action) => {
    switch (action.type) {
        case FETCH_ORGANIZATION:
            return Object.assign({}, state, { fetch: true, error: null });
        case FETCH_ORGANIZATION_SUCCESS:
            return Object.assign({}, state, { fetch: false, error: null, targets: action });
        case FETCH_ORGANIZATION_FAILED:
            return Object.assign({}, state, { fetch: false, error: action, targets: null });
        default:
            return state;
    }
}