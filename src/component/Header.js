// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/logo.png";
import '../styles/Header.scss';

const Header = () => {
    return (
        <div className='header-container'>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <div className="logo-container">
                        <img className="logo" src={logo} alt='weather logo' />
                    </div>
                    <div className={`menu-links`}>
                        <ul>
                            <li>
                                <Link className="text-light" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li>
                                <Link className="text-light" to="/">Weather</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
