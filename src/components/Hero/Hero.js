import React from 'react';
import './Hero.css'
import background from '../../images/cover/cover-1.png'
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate= useNavigate();
    const handleGetStarted = () =>{
      navigate('/courses')
    }

    return (
        <div className='hero-container' style={{ backgroundImage: `url(${background})` }}>
            
            <div className='transparent-div'>
                <div className="transparent-text">
                     <h1>World most trusted E-Learning Website</h1>
                     <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                     <button onClick={handleGetStarted} className='btn-primary'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;