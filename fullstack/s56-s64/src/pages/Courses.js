import { useState, useEffect } from 'react';
// import coursesData from '../data/coursesData';
import CourseCard from '../components/CourseCard';

export default function Courses() {

	// console.log(coursesData);

	// State tot store the courses retrieved from the db
	const [ courses, setCourses ] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/courses`)
		.then(res => res.json())
		.then(data => {
			console.log(data)

			setCourses(data.courses.map(course => {
				return(
					<CourseCard courseProp={course} key={course._id}/>
				)
			}))
		})
	}, [])

	// const courses = coursesData.map(course => {
	// 	return (
	// 		<CourseCard courseProp={course} key={course.id}/>
	// 	)
	// })

	return(
		<>
			<h1>Courses</h1>
			{courses}
			
		</>
	)
}