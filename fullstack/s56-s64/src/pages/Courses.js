import { useState, useEffect, useContext } from 'react';
// import coursesData from '../data/coursesData';
import CourseCard from '../components/CourseCard';
import UserContext from '../UserContext';
import UserView from '../components/UserView';
import AdminView from '../components/AdminView';

export default function Courses() {

	// console.log(coursesData);
	const { user } = useContext(UserContext);

	// State to store the courses retrieved from the db
	const [ courses, setCourses ] = useState([]); 

	const fetchData = () => {
		let fetchUrl = user.isAdmin === true 
			? `${process.env.REACT_APP_API_URL}/courses/all` 
			: `${process.env.REACT_APP_API_URL}/courses`

		fetch(fetchUrl, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)

			if(typeof data.message !== "string") {
				setCourses(data.courses);
			} else {
				setCourses([]);
			}
		})

	}

	useEffect(() => {
		// fetch(`${process.env.REACT_APP_API_URL}/courses/all`)
		// .then(res => res.json())
		// .then(data => {
		// 	console.log(data);
		// 	// console.log(data.courses)
		// 	setCourses(data.courses)
		// })

		fetchData();
	}, [user])


	// const courses = coursesData.map(course => {
	// 	return (
	// 		<CourseCard courseProp={course} key={course.id}/>
	// 	)
	// })

	return(
		<>
			{
               	(user.isAdmin === true) 
               		?
                   	<AdminView coursesData={courses}  fetchData={fetchData}/>
                   	:
                   	<UserView coursesData={courses} />
           }
			
		</>
	)
}