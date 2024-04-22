import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2'

export default function AddCourse() {

	const { user } = useContext(UserContext);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	
	const [ isActive , setIsActive ] = useState(false)
	const [courseAdded, setCourseAdded] = useState(false)

	useEffect(() => {
		if((name !== "" && description !== "" && price !== "" )){
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [name,description,price])

	function newCourse(e) {

		e.preventDefault();

		fetch('http://localhost:4000/courses', {
			method: 'POST',
			headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                name: name,
                description: description,
                price: price
            })
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			if(data.error === "Course already exists") {
				Swal.fire({
					title: "Course Already Exists",
					icon: "error",
				})

				setName("");
				setDescription("");
				setPrice(0);

			} else if (data.error === "Failed to save the course") {
				Swal.fire({
					title: "Unsuccessful Course Creation",
					icon: "error",
				})

				setName("");
				setDescription("");
				setPrice(0);

			} else if (data.savedCourse) {
				Swal.fire({
					title: "Course Added",
					icon: 'success',
				}).then(()=> {
					setCourseAdded(true)
				})
				
			}  else {
				console.log(data)
				Swal.fire({
					title: "Unsuccessful Course Creation",
					icon: 'error',
				})				
			}
		})

		setName("");
		setDescription("");
		setPrice(0);
	}

	if (courseAdded) {
		return <Navigate to="/courses" />
	}



	return (
		(user.id !== null)
		?
		<Form onSubmit={(e) => newCourse(e)}>
		<h1 className="text-center">Add Course</h1>
			<Form.Group className="mb-3" controlId="name">
			<Form.Label>Name:</Form.Label>
			<Form.Control 
			type="text" 
			placeholder="Enter Name" 
			required
			value={name}
			onChange={e => {setName(e.target.value)}}
			/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="description">
			<Form.Label>Description :</Form.Label>
			<Form.Control 
			type="text" 
			placeholder="Enter Description" 
			required
			value={description}
			onChange={e => {setDescription(e.target.value)}}
			/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="price">
			<Form.Label>Price :</Form.Label>
			<Form.Control 
			type="text" 
			placeholder="0" 
			required
			value={price}
			onChange={e => {setPrice(e.target.value)}}
			/>
			</Form.Group>

			{ isActive 
				?
				<Button variant="primary" type="submit">Submit</Button>
				:
				<Button variant="danger" type="submit" disabled>Submit</Button>

			}
		</Form>
		: <Navigate to="/courses" />
	)
}