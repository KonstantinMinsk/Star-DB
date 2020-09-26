import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin, onActiveNavLink }) => {

    if(isLoggedIn) {
        return (
            <Redirect to="/" />
            )
    }
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <h2> This page is full of secret </h2>
            <button
                className="btn btn-primary"
                onClick={onLogin}
            >
                Loggin
            </button>
        </div>
    )

}

export default LoginPage