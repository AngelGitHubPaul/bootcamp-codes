import { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';


export default function CourseCard({courseProp}){
	
	// console.log(props);
	const { name, description, price } = courseProp;
	// Syntax: const [ getter, setter function ] = useState(initialGetterValue)
	const [ count, setCount ] = useState(0);

	function enroll() {
		setCount(count + 1);
		console.log('Enrollees: ' + count);
	}

	return(
		<Row className="mt-3 mb-3">
			<Col xs={12} md={12}>
				<Card id="courseComponent" className="cardHighlight p-3" >
				  <Card.Body>
				    <Card.Title id="courseTitle">
				    	<h2>{name}</h2>
				    </Card.Title>
				    <Card.Text>
				        <Card.Title id="courseDescription">
				        	Description:
				        </Card.Title>
				        <Card.Text>
				        	{description}
				        </Card.Text>

				        <Card.Title>
				        	Price:
				        </Card.Title>
				        <Card.Text id ="coursePrice">
				        	Php {price}
				        </Card.Text>
				        <Card.Text >
				        	Enrollees: {count}
				        </Card.Text>
				    </Card.Text>
				    <Button variant="primary" onClick={enroll}>Enroll</Button>
				  </Card.Body>
				</Card>
			</Col>
		</Row>
	)
}