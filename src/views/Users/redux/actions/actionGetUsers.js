import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED } from '../types';
import getUsers from '../../api/getUsers';

const getUsersList = () => {
  return dispatch => {
    dispatch({
      type: FETCH_USERS
    });
    getUsers().then(data => {
      if (data) {
        dispatch({
          type: FETCH_USERS_SUCCESS,
          data: data
        });
      }
    }).catch(error => {
      dispatch({ type: FETCH_USERS_FAILED, data: error});
    })
  }
}

export { getUsersList };