import { useState } from 'react';
import './App.css';
import Header from './components/header/header.jsx';
import Pronostico from './components/pronostico/pronostico.jsx';
import Entradas_a_la_venta from './components/entradas_a_la_venta/entradas_a_la_venta.jsx';
import Artistas from './components/artistas/artistas.jsx';
import Video_de_la_velada from './components/video_de_la_velada/video_de_la_velada.jsx';
import Video_pesaje from './components/video_pesaje/video_pesaje.jsx';
import Video_cara_a_cara from './components/video_cara_a_cara/video_cara_a_cara.jsx';


function App() {
  return (
    <div className="app-container">
      <Header />
      <Pronostico />
      <Entradas_a_la_venta />
      <Artistas />
      <Video_de_la_velada />
      <Video_pesaje />
      <Video_cara_a_cara />
    </div>
  );
}

export default App;