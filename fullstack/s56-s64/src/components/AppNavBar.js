import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function AppNavBar() {

	return (
		<Navbar bg="light" expand="lg">
		  <Container fluid>
		    <Navbar.Brand href="#home">Zuitt Booking</Navbar.Brand>
		    <Nav className="me-auto">
		      <Nav.Link href="#home">Home</Nav.Link>
		      <Nav.Link href="#courses">Courses</Nav.Link>
		    </Nav>
		  </Container>
		</Navbar>
	)
}