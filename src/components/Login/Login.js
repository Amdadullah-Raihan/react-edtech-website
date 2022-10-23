import React from 'react';
import './Login.css'
import googleLogo from '../../images/Google__G__Logo.svg.png'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='register-container'>
        <h1>Log in</h1>
        <div className="form-container">
            {/* <div className='name-container'>

                <input type="text" placeholder='First Name'/>
                <input type="text" name="" id="" placeholder='Last Name' />
            </div> */}
            
            <input type="email" name="" id="" placeholder='Enter Your Email' />
            <input type="password" placeholder='Enter Password' />
            <input type="button" value="Log in"  id='register-btn'/>
             <div >
                <p>Don't have an account?</p> 
                <Link to="/register"> Register</Link>
             </div>
        </div>
        <div className='providers'>
            <div className='hr'> <p>or</p></div>
            <button><i class="fa-brands fa-facebook"></i> Log in with google</button>
            <button> <img src={googleLogo} alt='' className='google-logo'/>Log in with Facebook</button>
            <button> <i class="fa-brands fa-apple"></i> Log in with Apple ID</button>

        </div>
    </div>
    );
};

export default Login;