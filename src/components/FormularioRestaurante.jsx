import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createRestaurante, getRestaurante, updateRestaurante } from '../api/Restaurante.api';
import { FaUtensils } from 'react-icons/fa';

const FormularioRestaurante = () => {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [entrega, setEntrega] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getRestaurante(id).then(response => {
        const { nombre, direccion, precio, descripcion, entrega } = response.data;
        setNombre(nombre);
        setDireccion(direccion);
        setPrecio(precio);
        setDescripcion(descripcion);
        setEntrega(entrega);
      }).catch(error => console.error(error));
    }
  }, [id]);

  const handleSave = (e) => {
    e.preventDefault();
    const restaurante = { nombre, direccion, precio, descripcion, entrega };
    if (id) {
      updateRestaurante(id, restaurante)
        .then(() => {
          navigate('/lista');
        })
        .catch(error => console.error(error));
    } else {
      createRestaurante(restaurante)
        .then(() => {
          resetForm();
          navigate('/lista');
        })
        .catch(error => console.error(error));
    }
  };

  const resetForm = () => {
    setNombre('');
    setDireccion('');
    setPrecio('');
    setDescripcion('');
    setEntrega(false);
  };

  return (
    <div id='restaurantes' className="bg-black min-h-screen text-white py-8 px-4">
      <div className="container mx-auto px-4 py-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <FaUtensils className="mr-3" />
          {id ? 'Editar Restaurante' : 'Crear Pedido'}
        </h1>
        <form onSubmit={handleSave} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Nombre:</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-500 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Dirección:</label>
              <input
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-500 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Precio:</label>
              <input
                type="text"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-500 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Descripción:</label>
              <input
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-500 bg-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={entrega}
                onChange={(e) => setEntrega(e.target.checked)}
                className="rounded-md border border-gray-500 bg-gray-700 text-white focus:outline-none focus:border-blue-500 mr-2"
              />
              <label className="block text-sm font-semibold">Entrega Disponible</label>
            </div>
          </div>
          <button type="submit" className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300">
            {id ? 'Actualizar' : 'Guardar'}
          </button>
          <button type="button" onClick={() => navigate('/lista')} className="mt-6 bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 transition duration-300 ml-4">
               SU LISTA DE PEDIDOS 
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioRestaurante;
