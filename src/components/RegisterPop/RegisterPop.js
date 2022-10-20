import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPop.css'
const RegisterPop = () => {
    const navigate = useNavigate();
    const handleRegister =() => {
        navigate('/register')
    }
    return (
        <div className='pop-container'>
            <div className="pop-text">
                <h1>Ready to Join?</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis itaque praesentium commodi mollitia eaque!</p>
            </div>
            <div className="pop-btn">
                <button onClick={handleRegister} className='btn-secondary-own'>Register Now</button>
            </div>
        </div>
    );
};

export default RegisterPop;