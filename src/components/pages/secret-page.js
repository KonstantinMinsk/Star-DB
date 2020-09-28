import React from 'react';
import { Redirect } from 'react-router-dom';
import DummySwapiServise from '../../service/dummy-swapi-service';

const SecretPage = ({ isLoggedIn, onServiceChange, swapiServise }) => {

    const btnActive = swapiServise instanceof DummySwapiServise 
                        ? 'btn btn-primary btn-sm button-service active'
                        : 'btn btn-primary btn-sm button-service'
    if(isLoggedIn) {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
                <h2> This page is full of secret </h2>
                <button className={btnActive}
                        onClick={onServiceChange}
                >
                    Change Service
                </button>
            </div>
        )
    }

    return (
        <Redirect to="/login"/>
    )
}

export default SecretPage