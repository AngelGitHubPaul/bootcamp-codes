import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom'


export default function AppNavBar() {

	const [ user, setUser ] = useState(localStorage.getItem('token'));
	console.log(user);

	return (
		<Navbar bg="light" expand="lg">
		  <Container fluid>
		  <Navbar.Brand as={Link} to="/" >Zuitt</Navbar.Brand>
		        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		        <Navbar.Collapse id="basic-navbar-nav">
		        	<Nav className="ms-auto">
				        <Nav.Link as={Link} to="/">Home</Nav.Link>
				        <Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
				        {(user !== null)
				        	?
				        	<Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
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