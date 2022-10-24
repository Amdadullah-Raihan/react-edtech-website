import React, { useState } from 'react';
import './Login.css'
import googleLogo from '../../images/Google__G__Logo.svg.png'
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import useEmailPass from '../../hooks/useEmailPass';



const Login = () => {

    const {email,password,handleEmail, handlePass} = useEmailPass();
    const {signInWithGoogle, singInwithEmailPass} = useFirebase()
   
    return (
        <div className='register-container'>
        <h1>Log in</h1>
        <form className="form-container">
            {/* <div className='name-container'>

                <input type="text" placeholder='First Name'/>
                <input type="text" name="" id="" placeholder='Last Name' />
            </div> */}
            
            <input onBlur={handleEmail} type="email" name="" id="" placeholder='Enter Your Email' />
            <input onBlur={handlePass} type="password" placeholder='Enter Password' />
            <input onClick={()=> singInwithEmailPass(email, password)}  type="button" value="Log in"  id='register-btn'/>
             <div >
                <p>Don't have an account?</p> 
                <Link to="/register"> Register</Link>
             </div>
        </form>
        <div className='providers'>
            <div className='hr'> <p>or</p></div>
            <button onClick={signInWithGoogle}> <img src={googleLogo} alt='' className='google-logo'/>Log in with Google</button>
            <button ><i className="fa-brands fa-facebook"></i> Log in with Facebook</button>
            <button> <i className="fa-brands fa-apple"></i> Log in with Apple ID</button>

        </div>
    </div>
    );
};

export default Login;