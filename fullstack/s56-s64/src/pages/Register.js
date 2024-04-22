import { useState, useEffect , useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom'
import UserContext from '../UserContext'

export default function Register() {

	const {user} = useContext(UserContext)

	// States to store the values of the input fields
	const [ firstName, setFirstName] = useState("");
	const [ lastName, setLastName ] = useState("");
	const [ email, setEmail ] = useState("");
	const [ mobileNo, setMobileNo ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ confirmPassword, setConfirmPassword ] = useState("");
	const [ isActive , setIsActive ] = useState(false);

	console.log(firstName);
	console.log(lastName);
	console.log(email);
	console.log(mobileNo);
	console.log(password);
	console.log(confirmPassword);

	useEffect(() => {
		if((firstName !== "" && lastName !== "" && email !== "" && mobileNo !== "" && password !== "" && confirmPassword !== "") && (password === confirmPassword) && (mobileNo.length === 11)) {

			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}, [firstName, lastName, email, mobileNo, password, confirmPassword])


	// Function to register a user
	function registerUser(e) {

		e.preventDefault();

		fetch('http://localhost:4000/users/register', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				mobileNo: mobileNo,
				password: password
			})
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			if(data.message === "Registered Successfully") {
				// Clear the input fields
				setFirstName("");
				setLastName("");
				setEmail("");
				setMobileNo("");
				setPassword("");
				setConfirmPassword("");

				alert("Registration successful");

			} else if (data.error === "Email invalid") {

				alert("Email is invalid");

			} else if (data.error === "Mobile number invalid") {

				alert("Mobile number is invalid");

			} else if (data.error === "Password must be at least 8 characters") {

				alert("Password must be at least 8 characters");

			} else {

				alert("Something went wrong");
			}
		})
	}


	return (
		(user.id !== null) 
		? <Navigate to="/courses"/> :
		<Form onSubmit={(e) => registerUser(e)}>
		<h1 className="my-5 text-center">Register</h1>

		<Form.Group className="mb-3" controlId="firstName">
			<Form.Label>First Name</Form.Label>
			<Form.Control 
			type="text" 
			placeholder="Enter First Name" 
			required
			value={firstName}
			onChange={e => {setFirstName(e.target.value)}}
			/>
		</Form.Group>

		<Form.Group className="mb-3" controlId="lastName">
			<Form.Label>Last Name</Form.Label>
			<Form.Control 
			type="text" 
			placeholder="Enter Last Name" 
			required
			value={lastName}
			onChange={e => {setLastName(e.target.value)}}
			/>
		</Form.Group>

		<Form.Group className="mb-3" controlId="email">
			<Form.Label>Email:</Form.Label>
			<Form.Control 
			type="email" 
			placeholder="Enter Email"
			required
			value={email}
			onChange={e => {setEmail(e.target.value)}}
			/>
		</Form.Group>

		<Form.Group className="mb-3" controlId="mobileNo">
			<Form.Label>Mobile No:</Form.Label>
			<Form.Control 
			type="number" 
			placeholder="Enter 11 Digit No." 
			required
			value={mobileNo}
			onChange={e => {setMobileNo(e.target.value)}}
			/>
		</Form.Group>

		<Form.Group className="mb-3" controlId="password">
			<Form.Label>Password</Form.Label>
			<Form.Control 
			type="password" 
			placeholder="Enter Password" 
			required
			value={password}
			onChange={e => {setPassword(e.target.value)}}
			/>
		</Form.Group>

		<Form.Group className="mb-3" controlId="confirmPassword">
			<Form.Label>Confirm Password</Form.Label>
			<Form.Control 
			type="password" 
			placeholder="Confirm Password" 
			required
			value={confirmPassword}
			onChange={e => {setConfirmPassword(e.target.value)}}
			/>
		</Form.Group>

		{ isActive 
			?
			<Button variant="primary" type="submit">Submit</Button>
			:
			<Button variant="danger" type="submit" disabled>Submit</Button>

		}

		</Form>
	)
}