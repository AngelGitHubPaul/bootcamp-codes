import coursesData from '../data/coursesData'
import CourseCard from '../components/CourseCard';

export default function Courses () {
	
	console.log(coursesData);

	const courses = coursesData.map(course => {
		return (
			<CourseCard courseProp={course} key={course.id}/>
		)
	})

	return (
		<>
			<h1>Courses</h1>
			{courses}
		</>
	)
}