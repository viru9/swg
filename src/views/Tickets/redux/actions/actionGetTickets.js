import { FETCH_TICKETS, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILED } from '../types';
import getTickets from '../../api/getTickets';

const getTicketsList = () => {
  return dispatch => {
    dispatch({
      type: FETCH_TICKETS
    });
    getTickets().then(data => {
      if (data) {
        dispatch({
          type: FETCH_TICKETS_SUCCESS,
          data: data
        });
      }
    }).catch(error => {
      dispatch({ type: FETCH_TICKETS_FAILED, data: error});
    })
  }
}

export { getTicketsList };