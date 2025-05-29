import axios from 'axios';

const NEST_API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // withCredentials: true,
  // headers: {
  //   'X-Requested-With': 'XMLHttpRequest',
  //   'Content-Type': 'application/json',
  //   Accept: 'application/json',
  // },
});

NEST_API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { NEST_API };
