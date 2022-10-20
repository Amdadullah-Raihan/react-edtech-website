import React from 'react';
import './Student.css'

const Student = (props) => {
    // console.log(props);
    const {name, email,img} = props.student;
    return (
        <div className='student-card'>
            <img id='img' src={img} alt="" />
            <h5>{name}</h5>
            <p>{email}</p>
        </div>
    );
};

export default Student;