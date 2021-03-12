import axios from './axios';

export const createCustomer = (form) => {
    console.log(process.env);
    return axios.post(`/api/customer`, form);
};
