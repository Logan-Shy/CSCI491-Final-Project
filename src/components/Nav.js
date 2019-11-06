import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  
    const navStyle = {
        color: 'white'
    }

  return (
    <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link to="/about" style={navStyle}>
                <li>About</li>
            </Link>

            <Link to="/cats" style={navStyle}>
                <li>Cats</li>
            </Link>

            <Link to="/" style={navStyle}>
                <li>Home</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;