import React from 'react';
import "./register.css";

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">

        <label >Username</label>
            <input type="text" placeholder="Enter your username.." className="registerInput"/>
            <label >Email</label>
            <input type="text" placeholder="Enter your email.." className="registerInput"/>
            
            <label >Password</label>
            <input type="password" placeholder="enter your password" className="registerInput"/>
            <button className="registerButton">register</button>
        </form>
        <button className="registerLoginButton">Login</button>

    </div>
  )
}

