
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';
import useStudent from '../../hooks/useStudent';
import Course from '../Course/Course';
import Explore from '../Explore/Explore';
import FAQ from '../FAQ/FAQ';
import Hero from '../Hero/Hero';

import RegisterPop from '../RegisterPop/RegisterPop';
import Student from '../Student/Student';
import './Home.css'
const Home = () => {
     const [students] = useStudent();
     const [courses] = useCourses();

     let arr = [];
     let arrCourses = []
     arr = students.slice(0,4)
     arrCourses= courses.slice(0,4);

    
  

     const navigate = useNavigate();
    const handleViewStudents = () =>{
         navigate('/success')
    }
    const handleViewCourses = () =>{
        navigate('/courses')
   }
    
    
    
    
    return (
        <div className='home-container'>
            <div>
                <Hero> </Hero>
            </div>
            <div className="home-courses-container">
                <div >
                    <h1>Discover our populer courses</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat soluta itaque nostrum sunt, eum omnis in sed consequatur. Possimus, pariatur?</p>
                </div>
                <div className="home-course-container">
                    {
                        arrCourses.map(course => <Course key={course.id} course = {course}></Course> )
                    }
                </div>
                <button onClick={handleViewCourses} className='btn-primary'>See All Courses</button>
            </div>
            <div>
                <Explore></Explore>
            </div>
            <div>  
                
                    <RegisterPop></RegisterPop>
            </div>
            <div className='home-success-container'>
                <div className='success-text'>
                    <h1>Meet our Successful Students</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, sit. Voluptates, ex.  </p>
                </div>
                <div className='home-student-container'>
            
                    {
                        arr.map(st=><Student key={st.id} student={st}></Student>)
                    }
                </div>
            </div>
           <button onClick={handleViewStudents} className='btn-primary'>Veiw All</button>
           <div className='faq-container'>

              <FAQ></FAQ>   
                
           </div>
            
        </div>
    );
};

export default Home;