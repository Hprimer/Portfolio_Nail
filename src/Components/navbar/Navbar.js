import React from 'react'

import { NavLink } from 'react-router-dom'

import BtnDarkMode from "./../btnDarkMode/BtnDarkMode"
import './style.css'


const activeLink = 'nav-list__link--active';
const notActiveLink = 'nav-list__link';

function Navbar() {
	return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className='logo'>
                        <strong>Nail's</strong> portfolio
                    </NavLink>
                    <a href="./index.html" className="logo"></a>
                    
                    <BtnDarkMode />
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : notActiveLink}>
                                Home
                            </NavLink>                     
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='projects'className={({isActive}) => isActive ? activeLink : notActiveLink}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='contacts' className={({isActive}) => isActive ? activeLink : notActiveLink}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
		
	)
}

export default Navbar
