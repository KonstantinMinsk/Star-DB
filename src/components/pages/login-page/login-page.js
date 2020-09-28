import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './login-page.css'

const LoginPage = ({ isLoggedIn, onLogin, outLogin }) => {

    const [notValid, setnotValid] = useState(true);
    const [x, setX] = useState(Math.floor(Math.random()*100) + 1)
    const [y, setY] = useState(Math.floor(Math.random()*100) + 1)

    const result = (e) => {
        if(x+y === +e.target.value){
            document.querySelector('.form-control').classList.add('is-valid')
            setnotValid(false)
        } 
    }

    if(isLoggedIn) {
        return (
            <div className="jumbotron jumbotron-fluid text-center">
                <h2> Log out </h2>
                <button
                    className="btn btn-primary btn-lg"
                    onClick={outLogin}
                >
                    Log out
                </button>
            </div>
            )
    }

    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <h3> If you wish to see a SECRET page, <hr /> you should login </h3>
            <div className='alert alert-dismissible alert-primary d-flex'>
                <div className='number'>
                    <span className='badge badge-pill badge-primary'> {x} </span> 
                    + 
                    <span className='badge badge-pill badge-primary'> {y} </span>
                    = 
                </div>
                <input className="form-control" onChange={(e) => result(e)}
                    onKeyPress={ (e) => {
                                    if(e.key === 'Enter') onLogin(e)
                                    }}
                />
            </div>
            <button
                className="btn btn-primary btn-lg"
                onClick={onLogin}
                disabled={notValid}
            >
                Loggin
            </button>
        </div>
    )

}

export default LoginPage