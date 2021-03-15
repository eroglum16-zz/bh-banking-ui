import axios from './axios';

export const createAccount = (form) => {
    return axios.post(`/api/account/new`, form);
};
