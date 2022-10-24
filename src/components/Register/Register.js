import React from 'react';
import './Register.css'
import googleLogo from '../../images/Google__G__Logo.svg.png'
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import useEmailPass from '../../hooks/useEmailPass';

const Register = () => {
    const {email,password,handleEmail,handlePass} = useEmailPass();
    const {signUpwithEmailPass,signInWithGoogle} = useFirebase();
    return (
        <div className='register-container'>
            <h1>Register for free</h1>
            <div className="form-container">
                <div className='name-container'>

                    <input type="text" placeholder='First Name'/>
                    <input type="text" name=""  placeholder='Last Name' />
                </div>
                <input  onBlur={() => handleEmail()} type="email" name="" placeholder='Enter Your Email' />
                <input  onBlur={()=> handlePass()} type="password" placeholder='Enter Password' />
                <input onClick={()=> signUpwithEmailPass(email,password)} type="button" value="Register"  id='register-btn'/>
                <div>
                    <p>Already have an account?</p>
                    <Link to='/login'>Log in</Link>
                </div>
            </div>
            <div className='providers'>
            <div className='hr'> <p>or</p></div>
            <button onClick={signInWithGoogle}> <img src={googleLogo} alt='' className='google-logo'/>Continue with Google</button>
            <button><i className="fa-brands fa-facebook"></i> Continue with Facebook</button>
            <button> <i className="fa-brands fa-apple"></i> Continue with Apple ID</button>

        </div>
        </div>
    );
};

export default Register;