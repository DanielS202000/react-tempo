import React, { useState } from 'react';
import './App.css'; // Importa tu archivo de estilos CSS si aún no lo has hecho
//import backgroundImage from './ruta-a-tu-imagen.jpg'; // Reemplaza 'ruta-a-tu-imagen.jpg' con la ruta real de tu imagen

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  //const headerStyle = {
    //backgroundImage: `url(${backgroundImage})`, // Establece la imagen de fondo
  //};

  return (
    <div>
      <header className={`app-header ${menuVisible ? 'menu-open' : ''}`}>
        <div className="border-top"></div>
        {menuVisible && (
          <nav className="dropdown-menu">
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/acerca-de">Acerca de</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </nav>
        )}
        <button className="menu-button" onClick={toggleMenu}>☰</button>
        <div className="center-rectangle">
          <h1>Tu Aplicación</h1>
          
          
        </div>
      </header>
      <footer>
        <p>Derechos de autor © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;