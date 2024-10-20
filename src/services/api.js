import axios from 'axios';

const api = axios.create({
  baseURL: 'https://zenaldodevfullstack.netlify.app',
});

export default api;
