import { FETCH_ORGANIZATION, FETCH_ORGANIZATION_SUCCESS, FETCH_ORGANIZATION_FAILED } from '../types';
import getOrganizations from '../../api/getOrganizations';

const getOrganizationsList = () => {
  return dispatch => {
    dispatch({
      type: FETCH_ORGANIZATION
    });
    getOrganizations().then(data => {
      if (data) {
        dispatch({
          type: FETCH_ORGANIZATION_SUCCESS,
          data: data
        });
      }
    }).catch(error => {
      dispatch({ type: FETCH_ORGANIZATION_FAILED, data: error});
    })
  }
}

export { getOrganizationsList };