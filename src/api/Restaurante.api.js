import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 
                import.meta.env.VITE_BACKEND_URL : 'http://localhost:8000';

console.log(`API URL: ${baseURL}/api/restaurante/api_restauran/`);

const api = axios.create({
  baseURL: `${baseURL}/api/restaurante/api_restauran/`,
});

export const getAllRestaurantes = () => api.get('/');
export const getRestaurante = (id) => api.get(`/${id}`);
export const createRestaurante = (restaurante) => api.post('/', restaurante);
export const updateRestaurante = (id, restaurante) => api.put(`/${id}/`, restaurante);
export const deleteRestaurante = (id) => api.delete(`/${id}`);
