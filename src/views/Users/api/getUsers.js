import request from './../../../helpers/request';
import { config } from './../../../config/functions';

const getUsers = async () => {
    return await request.get(`${'users'}`, config);
}

export default getUsers;