import React, { useState } from 'react';
import './Login.css'
import googleLogo from '../../images/Google__G__Logo.svg.png'
import { Link } from 'react-router-dom';
// import { getAuth, GoogleAuthProvider, initializeAuth, sendSignInLinkToEmail, signInWithEmailAndPassword } from "firebase/auth";

// const provider = new GoogleAuthProvider();
// // initializeAuth();
// const auth = getAuth();

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
//     const [user, setUser] = useState([])

//    const handleEmailPasswordSignIn = () => {

//         signInWithEmailAndPassword()
//         .then(result => {
//             console.log(result.user);
//         })
//    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePass = (e) => {
        setPassword(e.target.value)
    }
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
            <input  type="button" value="Log in"  id='register-btn'/>
             <div >
                <p>Don't have an account?</p> 
                <Link to="/register"> Register</Link>
             </div>
        </form>
        <div className='providers'>
            <div className='hr'> <p>or</p></div>
            <button> <img src={googleLogo} alt='' className='google-logo'/>Log in with Google</button>
            <button ><i className="fa-brands fa-facebook"></i> Log in with Facebook</button>
            <button> <i className="fa-brands fa-apple"></i> Log in with Apple ID</button>

        </div>
    </div>
    );
};

export default Login;