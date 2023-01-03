import Header from './components/header';
import Footer from './components/footer';
import Agregar from './components/agregarColab';
import Listado from './components/listadoColab';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Agregar />
      <Listado />
      <Footer />
    </div>
  );
}

export default App;
