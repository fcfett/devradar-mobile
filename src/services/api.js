import axios from 'axios';

const api = axios.create({ baseURL: 'http://172.16.10.24:3333' });

export const getDevs = (options = {}) => api.get('/devs', options);

export const createDev = (data) => api.post('/devs', data);

export default api;
