import { useState , useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext'

export default function AppNavBar() {

	// State to store the user information stored in the login page.
	const {user} = useContext(UserContext);
	console.log(user);

	return (
		<Navbar bg="light" expand="lg">
		  <Container fluid>
		  <Navbar.Brand as={Link} to="/">Zuitt</Navbar.Brand>
		        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		        <Navbar.Collapse id="basic-navbar-nav">
		        	<Nav className="ms-auto">
				        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
				        <Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>

				        {(user.id !== null && !user.isAdmin)
				        	?
				        	<>
				        	<Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
				        	<Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
				        	</>

				        	: (user.id !== null && user.isAdmin) ?
				        	<>
				        	<Nav.Link as={NavLink} to="/addCourse">Add Course</Nav.Link>
				        	<Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
				        	</>
				        	: 
				        	<>
				        		<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
				        		<Nav.Link as={NavLink} to="/register">Register</Nav.Link>
				        	</>

				        }

		        	</Nav>
		         </Navbar.Collapse>
		  </Container>
		</Navbar>
	)
}