import React, { useEffect, useState } from 'react';
import { useSubmit } from 'react-router-dom';
import useStudent from '../../hooks/useStudent';
import useSuccess from '../../hooks/useStudent';
import Student from '../Student/Student';
import './Success.css'

const Success = () => {
   const [students, setStudents] = useStudent();
    return (
        <div className='success-container'>
            {
                students.map(student => <Student key={student.id} student = {student}></Student> )
            }
        </div>
    );
};

export default Success;