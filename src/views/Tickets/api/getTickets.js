import request from '../../../helpers/request';
import { config } from '../../../config/functions';

const getTickets = async () => {
    return await request.get(`${'tickets'}`, config);
}

export default getTickets;