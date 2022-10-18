import { Avatar } from '@mui/material';
import React from 'react';
import Courses from '../Courses/Courses';
import Success from '../Success/Success';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container'>
            <div className='intro'>
                {/* <h1>This is home page</h1> */}
                <img src="./images/cover/cover-1.png" alt="" />
            </div>
            <Courses></Courses>
            <Success></Success>
            
        </div>
    );
};

export default Home;