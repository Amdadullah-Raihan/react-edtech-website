import React from 'react';
import './Register.css'

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
        </div>
    );
};

export default Register;