import request from '../../../helpers/request';
import { config } from '../../../config/functions';

const getOrganizations = async () => {
    return await request.get(`${'organizations'}`, config);
}

export default getOrganizations;