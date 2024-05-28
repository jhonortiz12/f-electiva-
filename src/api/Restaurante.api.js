import axios from 'axios';

const backendURL = 'http://127.0.0.1:8000/';

console.log(`API URL: ${backendURL}api/restaurante/api/restaurante/`);

// Crea una instancia de Axios con la URL base configurada
const api = axios.create({
  baseURL: `${backendURL}api/restaurante/api/restaurante/`,
});

export const getAllRestaurantes = () => api.get('/');
export const getRestaurante = (id) => api.get(`/${id}`);
export const createRestaurante = (restaurante) => api.post('/', restaurante);
export const updateRestaurante = (id, restaurante) => api.put(`/${id}/`, restaurante);
export const deleteRestaurante = (id) => api.delete(`/${id}`);
