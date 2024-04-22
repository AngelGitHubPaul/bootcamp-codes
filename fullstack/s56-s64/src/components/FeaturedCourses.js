import { useState, useEffect } from 'react'
import { CardGroup } from 'react-bootstrap'
import PreviewCourses from './PreviewCourses'

export default function FeaturedCourses() {

	const [ previews, setPreviews ] = useState([]);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/courses`)
		.then(res => res.json())
		.then(data => {
			console.log(data)

			// to store random numbers
			const numbers = []
			// to store the featured courses
			const featured = []

			const generateRandomNums = () => {
				let randomNum = Math.floor(Math.random() * data.courses.length)
				if(numbers.indexOf(randomNum) === -1) {
					numbers.push(randomNum)
				} else {
					generateRandomNums()
				}
			}

			for(let i = 0; i < 5; i++) {
				generateRandomNums();

				featured.push(
					<PreviewCourses data={data.courses[numbers[i]]} key={data.courses[numbers[i]]._id} breakPoint={2} />
				)
			}
			setPreviews(featured)
		})
	}, [])

	return (
		<>
			<h2 className="text-center">FeaturedCourses</h2>
			<CardGroup className="justify-content-center">
				{previews}
			</CardGroup>
			
		</>
	)
}