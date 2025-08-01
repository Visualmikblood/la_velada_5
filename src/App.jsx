import { useState } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Pronostico from './components/pronostico/pronostico.jsx';


function App() {
  return (
    <div className="app-container">
      <Header />
      <Pronostico />
    </div>
  );
}

export default App;