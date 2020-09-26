import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn, onServiceChange }) => {

    if(isLoggedIn) {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
                <h2> This page is full of secret </h2>
                <button className='btn btn-primary btn-sm button-service'
                        onClick={onServiceChange}
                        style={{ height: '48px' }}
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