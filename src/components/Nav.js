import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  
    const navStyle = {
        color: 'white'
    }

  return (
    <nav>
        <img src="assets/logo.png" alt="Company Logo" />
        <ul className="nav-links">
            <Link to="/" style={navStyle}>
                <li>Home</li>
            </Link>

            <Link to="/cats" style={navStyle}>
                <li>Cats</li>
            </Link>

            <Link to="/about" style={navStyle}>
                <li>About</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;