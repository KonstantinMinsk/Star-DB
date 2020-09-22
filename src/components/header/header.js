import React from 'react';
import './header.css';

import {
    Link
  } from "react-router-dom";

  
const Header = ({ onServiceChange, onActiveNavLink }) => {
    return(
        <div className='header d-flex'>
            <h3 onClick={(e) => onActiveNavLink(e)} >
                <Link  to='/'>Star DB</Link>
            </h3>
            <ul className='d-flex' id='nav'>
                <li onClick={ (e) => onActiveNavLink(e) }>
                    <Link to='/people'>People</Link>
                </li>
                <li onClick={ (e) => onActiveNavLink(e) }>
                    <Link to='/planets'> Planets </Link>
                </li>
                <li onClick={ (e) => onActiveNavLink(e) }>
                    <Link to='/starships'> Starships </Link>
                </li>
                <button className='btn btn-primary btn-sm'
                        onClick={onServiceChange}
                >
                    Change Service
                </button>
            </ul>
        </div>
    )
}
export default Header