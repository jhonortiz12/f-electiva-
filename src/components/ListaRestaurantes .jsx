import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllRestaurantes, deleteRestaurante } from '../api/Restaurante.api';
import { FaEdit, FaTrashAlt, FaArrowLeft } from 'react-icons/fa';

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadRestaurantes();
  }, []);

  const loadRestaurantes = () => {
    getAllRestaurantes()
      .then(response => setRestaurantes(response.data))
      .catch(error => console.error(error));
  };

  const handleDelete = (restauranteId) => {
    deleteRestaurante(restauranteId)
      .then(() => {
        loadRestaurantes();
      })
      .catch(error => console.error(error));
  };

  const handleEdit = (restauranteId) => {
    navigate(`/crear/${restauranteId}`);
  };

  return (
    <div className="bg-white min-h-screen text-white py-8 px-4">
      <div className="container mx-auto px-4 py-8 bg-black rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8">Lista de Sus Pedidos</h1>
        
        <ul>
          {restaurantes.map(restaurante => (
            <li key={restaurante.id} className="border-b border-gray-700 py-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{restaurante.nombre}</h2>
                <p className="text-gray-400">{restaurante.direccion}</p>
                <p>{restaurante.precio}</p>
                <p>{restaurante.descripcion}</p>
                <p>{restaurante.entrega ? 'Entrega Disponible' : 'Sin Entrega'}</p>
              </div>
              <div className="flex items-center">

                <button onClick={() => handleDelete(restaurante.id)} className="text-red-500 flex items-center">
                  <FaTrashAlt className="mr-1" /> Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button onClick={() => navigate('/')} className="mt-6 bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 transition duration-300 flex items-center">
          <FaArrowLeft className="mr-2" /> Ir a inicio
        </button>
      </div>
    </div>
  );
};

export default ListaRestaurantes;
