import React from 'react';
import { useNavigate } from 'react-router-dom';
import restaurante from '../assets/iamgenes/restaurante.jpg';



const HomePage = () => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/crear');
  };

  const handleListClick = () => {
    navigate('/lista');
  };

  return (
    
    
    <div className="bg-white flex justify-center items-center ">
        <div className='text-center'>
            <h1 className="text-6xl text-black  font-bold">Bienvenido a su restaurante</h1>
            <div className="flex flex-col md:flex-row justify-around items-center">
                <div className="m-28">
                    <img src={restaurante} alt="Imagen" style={{ width: '500px', height: '300px' }} />
                </div>
                <div className="m-60 flex flex-row">
                    <button onClick={handleCreateClick} className="bg-black text-white p-4 m-8 rounded">Crear Pedido</button>
                    <button onClick={handleListClick} className="bg-black text-white p-4 m-8 rounded">Lista de Pedidos</button>
                </div>
            </div>
        </div>    

    </div>
  );
};

export default HomePage;
