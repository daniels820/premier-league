import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">

        <Link to="/">Premier League</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/table">Table</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
