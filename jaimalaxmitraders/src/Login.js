import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./css/login.css";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth =getAuth();
    const signIn = e =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((auth) =>{
            // succesfully created a new user with email and password
            // console.log(auth);
            history.push('/')
        })
        .catch(error => alert(error.message))
        //some fancy firebase login........
    }
    const register = e =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
            .then((auth) =>{
                // succesfully created a new user with email and password
                // console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        //some fancy firebase register........
    }
    return (
        <div className="login">
            <Link to='/'>
                <img className="login_logo" src="./images/logohead.png" alt='' />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn} className="login_signInButton">Sign In</button>
                </form>
                <p>
                    By signing you agree to store conditions of Use & sale. Please see our Privacy Notice,
                    Our Cookies Notice & Interest-Based Ads
                </p>
                <button onClick={register} className="login_registerButton">Create Your Account</button>
            </div>
        </div>
    )
}

export default Login