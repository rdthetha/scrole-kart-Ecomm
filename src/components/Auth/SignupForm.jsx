import React from 'react'
import { Link } from 'react-router-dom'

export default function SignupForm() {
return (
<div className="ec-login-wrapper">
    <div>
        <form className="ec-login-form" action="">
            <div className="h3 form-text-head">Signup!</div>
            <hr />
            <div className="h5">Email address*</div>
            <div className="component-input login-input">
                <input className="input-box-basic" placeholder="Enter email-id" type="text" />
                <label for="Email"></label>
            </div>
            <div className="h5">Password*</div>
            <div className="component-input login-input">
                <input className="input-box-basic" placeholder="Enter password" type="password" />
                <label for="Data"></label>
            </div>
            <div className="login-check">
                <div className="login-remember">
                    <input type="checkbox" name="terms and condition " />
                    <div className="small-text login-remember-text">&nbsp;I accept all the T&C </div>
                </div>
            </div>
            <button className="btn-primary btn-outline-primary btn-card">Register Now!</button>
            <Link to="/Login"className="underline-text">Already have an account</Link>
        </form>
    </div>
</div>
)
}