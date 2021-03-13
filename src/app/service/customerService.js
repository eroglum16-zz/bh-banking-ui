import axios from './axios';

export const createCustomer = (form) => {
    return axios.post(`/api/customer`, form);
};
