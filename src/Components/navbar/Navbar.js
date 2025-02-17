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
                    <NavLink to="/Portfolio_Nail" className='logo'>
                        <strong>Nail's</strong> portfolio
                    </NavLink>
                    {/* <a href="./index.html" className="logo"></a> */}
                     
                    <BtnDarkMode />
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/Portfolio_Nail" end className={({isActive}) => isActive ? activeLink : notActiveLink}>
                                Home
                            </NavLink>
                            {/* end нужен в NavLink для того чтобы isActive правильно проверял
                            так как в он проверяет просто наличие /Portfolio_Nail/ в строке поиска,
                            то на любой странице будет присутствовать /Portfolio_Nail/. 
                            end - проверяет полное соответствие строки с /Portfolio_Nail/.
                                                :^)
                            */}
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/Portfolio_Nail/projects'className={({isActive}) => isActive ? activeLink : notActiveLink}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/Portfolio_Nail/contacts' className={({isActive}) => isActive ? activeLink : notActiveLink}>
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
