import React from 'react';
import './Register.css'
import googleLogo from '../../images/Google__G__Logo.svg.png'

const Register = () => {
    return (
        <div className='register-container'>
            <h1>Register for free</h1>
            <div className="form-container">
                <div className='name-container'>

                    <input type="text" placeholder='First Name'/>
                    <input type="text" name="" id="" placeholder='Last Name' />
                </div>
                <input type="email" name="" id="" placeholder='Enter Your Email' />
                <input type="password" placeholder='Enter Password' />
                <input type="button" value="Register"  id='register-btn'/>
            </div>
            <div className='providers'>
            <div className='hr'> <p>or</p></div>
            <button><i class="fa-brands fa-facebook"></i> Continue with Google</button>
            <button> <img src={googleLogo} alt='' className='google-logo'/>Continue with Facebook</button>
            <button> <i class="fa-brands fa-apple"></i> Continue with Apple ID</button>

        </div>
        </div>
    );
};

export default Register;