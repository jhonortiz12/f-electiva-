const baseURL = process.env.NODE_ENV === 'production' ? 
                import.meta.env.VITE_BACKEND_URL : 'https://electiva-b.azurewebsites.net/';

console.log(`API URL: ${baseURL}/api/restaurante/api_backen/`);

const api = axios.create({
  baseURL: `${baseURL}/api/restaurante/api_backen/`,
});


export const getAllRestaurantes = () => api.get('/');
export const getRestaurante = (id) => api.get(`/${id}`);
export const createRestaurante = (restaurante) => api.post('/', restaurante);
export const updateRestaurante = (id, restaurante) => api.put(`/${id}/`, restaurante);
export const deleteRestaurante = (id) => api.delete(`/${id}`);
