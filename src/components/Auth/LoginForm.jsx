import React from 'react'
import { Link } from 'react-router-dom'
export default function LoginForm() {
return (

<div className="ec-login-wrapper">
    <form className="ec-login-form" action="">
        <div className="h3 form-text-head">Login!</div>
        <hr />
        <div className="h5">Email address*</div>
        <div className="component-input login-input">
            <label htmlFor="Email"><input className="input-box-basic" placeholder="Enter email-id" type="text"/></label>
        </div>
        <div className="h5">Password*</div>
        <div className="component-input login-input">
            <label htmlFor="Data"><input className="input-box-basic" placeholder="Enter password" type="password"/></label>
        </div>
        <div className="login-check">
            <div className="login-remember">
                <input type="checkbox" name="login-remember"/>
                <div className="small-text login-remember-text">&nbsp;Remember Me!</div>
            </div>
        </div>
        <button className="btn-primary btn-outline-primary btn-card">Login</button>
        <Link to="/" className="small-text login-forgot-text">Forget your Password!</Link>
        <Link to="/Signup" className="underline-text">Create New Account </Link>
    </form>
</div>

)
}