import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioRestaurante from './components/FormularioRestaurante';
import ListaRestaurantes from './components/ListaRestaurantes ';

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/crear" element={<FormularioRestaurante />} />
        <Route path="/lista" element={<ListaRestaurantes />} />
        <Route path="/" element={<FormularioRestaurante />} />
      </Routes>
    </Router>
  );
};

export default App;
