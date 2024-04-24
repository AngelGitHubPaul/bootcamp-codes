import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'
import Swal from 'sweetalert2'


export default function EditCourse({ course, fetchData}) {

	// States
	const [ courseId, setCourseId ] = useState("");
	const [ name, setName ] = useState("");
	const [ description, setDescription ] = useState("");
	const [ price, setPrice ] = useState(0);
	// State for edit course modal to open/close
	const [ showEdit, setShowEdit ] = useState(false);

	// function for opening the modal
	const openEdit = (courseId) => {
		fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}`)
		.then(res => res.json())
		.then(data => {
			setCourseId(data.course._id);
			setName(data.course.name);
			setDescription(data.course.description);
			setPrice(data.course.price);
		})

		setShowEdit(true);
	}

	// function for closing the modal
	const closeEdit = () => {
		setShowEdit(false);
		setName("");
		setDescription("");
		setPrice(0)
	}

	// function to update the course
	const editCourse = (e, courseId) => {
		e.preventDefault();

		fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}`, {
			method: "PATCH",
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
			if(data.message === "Course updated successfully") {
				Swal.fire({
					title: "Success!",
					icon: "success",
					text: 'Course successfully updated!'
				})
				closeEdit();
				fetchData();
			} else {
				Swal.fire({
					title: "Error!",
					icon: "error",
					text: 'Please try again'
				})
				closeEdit();
				fetchData();
			}
		})
	}

	return (
		<>
			<Button variant="primary" size="sm" onClick={() => openEdit(course)}>Edit</Button>

			<Modal show={showEdit} onHide={closeEdit}>
				<Form onSubmit={e => editCourse(e, courseId)}>
					<Modal.Header closeButton>
			          <Modal.Title>Edit Course</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			        	<Form.Group className="mb-3" controlId="courseName">
		        	        <Form.Label>Name</Form.Label>
		        	        <Form.Control type="text" required value={name} onChange={e => setName(e.target.value)}/>
		        	    </Form.Group>

		        	    <Form.Group className="mb-3" controlId="courseDescription">
		        	        <Form.Label>Description</Form.Label>
		        	        <Form.Control type="text" required value={description} onChange={e => setDescription(e.target.value)}/>
		        	    </Form.Group>

		        	    <Form.Group className="mb-3" controlId="coursePrice">
		        	        <Form.Label>Price</Form.Label>
		        	        <Form.Control type="number" required value={price} onChange={e => setPrice(e.target.value)}/>
		        	    </Form.Group>
			        </Modal.Body>
			        <Modal.Footer>
	                  <Button variant="secondary" onClick={closeEdit}>Close</Button>
	                  <Button variant="primary" type="submit">Submit</Button>
	                </Modal.Footer>
				</Form>
			</Modal>
		</>

	)
}