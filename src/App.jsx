import { useState } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Pronostico from './components/pronostico/pronostico.jsx';
import Entradas_a_la_venta from './components/entradas_a_la_venta/entradas_a_la_venta.jsx';


function App() {
  return (
    <div className="app-container">
      <Header />
      <Pronostico />
      <Entradas_a_la_venta />
    </div>
  );
}

export default App;