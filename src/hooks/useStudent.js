import React, { useEffect, useState } from "react";
const useStudent = () => {
    const [students, setStudents] = useState([]);
    useEffect(()=>{
        fetch('student.json')
        .then(res=> res.json())
        .then(data=>setStudents(data))

    },[])
    return[students,setStudents]
}
export default useStudent;