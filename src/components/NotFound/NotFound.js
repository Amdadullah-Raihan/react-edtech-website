import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <h1 className='text-danger four-o-four-text'>404!</h1>
            <h1 className='text-danger'>Oopss! The page you're looking for was not found!!</h1>
        </div>
    );
};

export default NotFound;