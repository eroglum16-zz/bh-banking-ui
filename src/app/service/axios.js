import axios from 'axios';
import { apiUrl } from '../../../src/config';

const instance = axios.create({
    baseURL: apiUrl
});

export default instance;
