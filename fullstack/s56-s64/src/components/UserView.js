import { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import CourseSearch from './CourseSearch';

export default function UserView({ coursesData }) {
    // console.log({coursesData})
    // const { coursesData } = coursesData;
    // console.log(coursesData)
    const [ courses, setCourses ] = useState([])

    useEffect(() => {
        const coursesArr = coursesData.map(course => {
            console.log(course)
            //only render the active courses since the route used is /all from Course.js page
            if(course.isActive === true) {
                return (
                    <CourseCard courseProp={course} key={course._id}/>
                    )
            } else {
                return null;
            }
        })

        //set the courses state to the result of our map function, to bring our returned course component outside of the scope of our useEffect where our return statement below can see.
        setCourses(coursesArr)

    }, [coursesData])

    return(
        <>  
            <CourseSearch />
            { courses }
        </>
        )
}
