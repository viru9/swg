import axios from 'axios';
import { BASE_URL } from '../config/config'

const request = axios.create({ baseURL: BASE_URL });

export default request;

