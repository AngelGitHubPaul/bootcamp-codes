// a. Add useState and useEffect
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditCourse from './EditCourse';
import ArchiveCourse from './ArchiveCourse'

export default function AdminView({ coursesData, fetchData }) {

    // b. Add state to store all courses 
    const [courses, setCourses] = useState([])


    //Getting the coursesData from the courses page
    useEffect(() => {
        const coursesArr = coursesData.map(course => {
            console.log(course)
            return (
                <tr key={course._id}>
                    <td>{course._id}</td>
                    <td>{course.name}</td>
                    <td>{course.description}</td>
                    <td>{course.price}</td>
                    <td className={course.isActive ? "text-success" : "text-danger"}>
                        {course.isActive ? "Available" : "Unavailable"}
                    </td>
                    <td><EditCourse course={course._id} fetchData={fetchData}/></td> 
                    <td><ArchiveCourse courseId={course._id} fetchData={fetchData} isActive={course.isActive}/></td>    
                </tr>
                )
        })

        setCourses(coursesArr)

    }, [coursesData])


    return(
        <>
            <h1 className="text-center my-4"> Admin Dashboard</h1>
            
            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Availability</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {courses}
                </tbody>
            </Table>    
        </>

        )
}