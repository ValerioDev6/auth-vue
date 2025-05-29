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

// 🔍 Interceptor para mostrar todas las respuestas
NEST_API.interceptors.response.use(
  (response) => {
    console.log(`[✅ RESPONSE] ${response.config.url}`, response.data);
    return response;
  },
  (error) => {
    console.error(`[❌ ERROR] ${error.config?.url}`, error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export { NEST_API };
