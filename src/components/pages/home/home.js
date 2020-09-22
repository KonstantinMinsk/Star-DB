import React from 'react';
import './home.css';
import {
    Link
  } from "react-router-dom";

const Home = () => {
    return(
        <div className='home'>
            <h2> Welcome to Star DB </h2>
            <ul className='d-flex'>
                <li>
                    <Link to='/people'>
                        <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                            <div className="card-header">People</div>
                            <div className="card-body">
                                <h4 className="card-title">The famous People Star DB</h4>
                            </div>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to='/planets'> 
                        <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                            <div className="card-header">Planets</div>
                            <div className="card-body">
                                <h4 className="card-title">The popular Planets Star DB</h4>
                            </div>
                        </div>
                    </Link>
                </li>
                
                <li>
                    <Link to='/starships'>  
                        <div className="card border-primary mb-3" style={{maxWidth: '20rem'}}>
                            <div className="card-header">Starships</div>
                            <div className="card-body">
                                <h4 className="card-title">The favorite Starships Star DB</h4>
                            </div>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Home