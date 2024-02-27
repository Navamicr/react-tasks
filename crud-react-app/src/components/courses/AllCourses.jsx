

import React, { useEffect, useState,useContext } from 'react'

import Spinner from '../../pages/spinner/Spinner';
import Course from './Course';
import courseService from '../../services/CourseService';
import SearchCourses from '../searchFilter/SearchCourses';
// import { UserContextApi } from '../../context/UserContext';

const AllCourses = () => {
    // let {users,fetchUsers}=useContext(UserContextApi)
    // console.log(users)
    let [state,setState]=useState(null);
    let [searchTerm,setSearchTerm]=useState("")
    let fetchCourses=async()=>{
        // let {data}=await axios.get('http://localhost:5000/courses');
        let data=await courseService.fetchService();
        setState(data);
    }

    let handleSearch=(term)=>{
        setSearchTerm(term)
    }

    useEffect(()=>{
        fetchCourses();
        // fetchUsers();
    },[]);

    let FilteredCourse=state?.filter(val=>{
        if(searchTerm === ""){
            return val;
        }
        else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
        }
    }).map(course=>
        <Course key={course.id}{...course}/>)
  return (
    <>
    <SearchCourses handleSearch={handleSearch}/>
    <h2>All Courses</h2>
    <div className="courses">
        {
            state===null? <Spinner/>:FilteredCourse
        }
    </div>
    </>
  )
}

export default AllCourses