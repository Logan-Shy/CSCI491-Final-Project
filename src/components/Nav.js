import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 10vh;
    background: rgb(45, 108, 129);
    color: white;
`
const NavLinks = styled.ul`
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`

const Nav = () => {
    const navStyle = {
        color: 'white'
    }

  return (
    <Navbar>
        <img src="assets/logo.png" alt="Company Logo" />
        <NavLinks>
            <Link to="/" style={navStyle}>
                <li>Home</li>
            </Link>

            <Link to="/cats" style={navStyle}>
                <li>Cats</li>
            </Link>

            <Link to="/about" style={navStyle}>
                <li>About</li>
            </Link>
        </NavLinks>
    </Navbar>
  );
}

export default Nav;