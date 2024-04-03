// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css'; // Importa os estilos CSS do Navbar
import '..//styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
      <li>
          <Link to="/products">
            <img src="caminho_para_sua_logo.png" alt="" className="logo" /> {/* Inclui a logo ao lado do link */}
            Home
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img src="caminho_para_sua_logo.png" alt="" className="logo" /> {/* Inclui a logo ao lado do link */}
            Cadastro de Produto
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <img src="caminho_para_sua_logo.png" alt="" className="logo" /> {/* Inclui a logo ao lado do link */}
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/products">
            <img src="caminho_para_sua_logo.png" alt="" className="logo" /> {/* Inclui a logo ao lado do link */}
            Configuração
          </Link>
        </li>

        <li>
          <Link to="/products">
            <img src="caminho_para_sua_logo.png" alt="" className="logo" /> {/* Inclui a logo ao lado do link */}
            Sair    
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
