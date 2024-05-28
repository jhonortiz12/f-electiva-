import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioRestaurante from './components/FormularioRestaurante';
import ListaRestaurantes from './components/ListaRestaurantes ';
import HomePage from './components/HomePage' ;


const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/crear" element={<FormularioRestaurante />} />
          <Route path="/lista" element={<ListaRestaurantes />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>

    </div>
      
  );
};

export default App;
