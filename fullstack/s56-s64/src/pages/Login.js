import { useState, useEffect , useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import UserContext from '../UserContext'

export default function Login() {

	// Allows us to  consume the UserContext object
	const {user, setUser} = useContext(UserContext);

	// State hooks to store the values of the input fields
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// State to determine whether submit button is enabled or not
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {

	     // Validation to enable submit button when all fields are populated and both passwords match
	     if(email !== '' && password !== ''){
	         setIsActive(true);
	     }else{
	         setIsActive(false);
	     }

	 }, [email, password]);

	function authenticate(e) {

	    // Prevents page redirection via form submission
	    e.preventDefault();
	    fetch('http://localhost:4000/users/login',{
		    method: 'POST',
		    headers: {
		        "Content-Type": "application/json"
		    },
		    body: JSON.stringify({
		
		        email: email,
		        password: password
		
		    })
		})
		.then(res => res.json())
		.then(data => {

			console.log(data)

		    if(data.accessToken){

		    	// Set the token of the authenticated user in the local storage
		    	// Syntax
		    	// localStorage.setItem('propertyName', value);
		    	localStorage.setItem('token', data.accessToken);

		        // setUser({
		        // 	access : localStorage.getItem('token')
		        // })

		       	retrieveUserDetails(data.accessToken)

		        // alert(`You are now logged in`);

		        Swal.fire({
		        	title: "Login Successfull",
		        	icon: "success",
		        	text: "Welcome to Zuitt!"
		        })
		    
		    } else if (data.error === "No Email Found") {

		        Swal.fire({
		        	title: "Email not found",
		        	icon: "error",
		        	text: "Check your email and try again"
		        })

		    } else {

		        Swal.fire({
		        	title: "Authentication failed",
		        	icon: "error",
		        	text: "Check your login credentials and try again"
		        })
		    }
		})
		// Clear input fields after submission
		setEmail('');
		setPassword('');

	}

	const retrieveUserDetails = (token) => {
		fetch('http://localhost:4000/users/details', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);

			setUser({
				id: data.user._id,
				isAdmin: data.user.isAdmin
			})
		})

	}


    return (    
        
    	(user.id !== null )
    	?
    	<Navigate to="/courses"/>
    	:
    	<Form onSubmit={(e) => authenticate(e)}>
    	    <h1 className="my-5 text-center">Login</h1>
    	    <Form.Group controlId="userEmail">
    	        <Form.Label>Email address</Form.Label>
    	        <Form.Control 
    	            type="email" 
    	            placeholder="Enter email"
    	            value={email}
    	            onChange={(e) => setEmail(e.target.value)}
    	            required
    	        />
    	    </Form.Group>

    	    <Form.Group controlId="password">
    	        <Form.Label>Password</Form.Label>
    	        <Form.Control 
    	            type="password" 
    	            placeholder="Password"
    	            value={password}
    	            onChange={(e) => setPassword(e.target.value)}
    	            required
    	        />
    	    </Form.Group>

    	    { isActive ? 
    	        <Button variant="primary" type="submit" id="submitBtn">
    	            Submit
    	        </Button>
    	        : 
    	        <Button variant="danger" type="submit" id="submitBtn" disabled>
    	            Submit
    	        </Button>
    	    }
    	</Form>      
    )
}