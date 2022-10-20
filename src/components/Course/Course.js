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
                <h5>{name}</h5>
                <p>{description}</p>
                <h6>Price: ${price}</h6>
            </div>
        
        </div>
    );
};

export default Course;