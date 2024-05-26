import axios from 'axios';

const backendURL = 'https://electiva-b.azurewebsites.net/';

console.log(`API URL: ${backendURL}api/restaurante/api_backen/`);

// Crea una instancia de Axios con la URL base configurada
const api = axios.create({
  baseURL: `${backendURL}api/restaurante/api_backen/`,
});

export const getAllRestaurantes = () => api.get('/');
export const getRestaurante = (id) => api.get(`/${id}`);
export const createRestaurante = (restaurante) => api.post('/', restaurante);
export const updateRestaurante = (id, restaurante) => api.put(`/${id}/`, restaurante);
export const deleteRestaurante = (id) => api.delete(`/${id}`);
