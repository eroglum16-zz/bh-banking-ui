import axios from './axios';

export const createCustomer = (form) => {
    return axios.post('/api/customer', form);
};

export const getCustomer = (id) => {
    return axios.get(`/api/customer/${id}`);
};
