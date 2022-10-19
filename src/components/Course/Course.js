import React from 'react';
import './Course.css'

const Course = (props) => {
    const {name, img, description, price} = props.course 
    return (
        <div className='course-card'>
            <div className="card-img">
                 <img id='img' src={img} alt="" />
            </div>
            <div className="card-text">
                <h3>{name}</h3>
                <p>{description}</p>
                <h5>Price: ${price}</h5>
            </div>
        
        </div>
    );
};

export default Course;