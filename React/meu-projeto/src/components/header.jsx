import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Meu Projeto</h1>
        <nav className="nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Contador</Link>
            </li>
            <li className="nav-item">
              <Link to="/Lojinha" className="nav-link">Lojinha</Link>
            </li>
            <li className="nav-item">
              <Link to="/Conquistas" className="nav-link">Conquistas</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;