import React from 'react';
import './header.css';

import {
    Link, Redirect
  } from "react-router-dom";

const Header = ({ onServiceChange, onActiveNavLink, isLoggedIn }) => { 
    return(
        <div className='header d-flex justify-content-around'>
            <h1 onClick={ (e) => onActiveNavLink(e) } >
                <Link  to='/'>Star DB</Link>
            </h1>
            <ul className='d-flex' id='nav'>
                <li onClick={ (e) => onActiveNavLink(e) }>
                    <Link to='/people/'>People</Link>
                </li>
                <li onClick={ (e) => onActiveNavLink(e) }>
                    <Link to='/planets/'> Planets </Link>
                </li>
                <li onClick={ (e) => onActiveNavLink(e) }>
                    <Link to='/starships/'> Starships </Link>
                </li>
                <li onClick={ (e) => onActiveNavLink(e) }>
                    <Link to='/secret'> Secret </Link>
                </li>
                <li onClick={ (e) => onActiveNavLink(e) }>
                    <Link to='/login'> Login </Link>
                </li>
            </ul>
            <button className='btn btn-primary btn-sm button-service'
                        onClick={onServiceChange}
                >
                    Change Service
            </button>
        </div>
    )
}
export default Header