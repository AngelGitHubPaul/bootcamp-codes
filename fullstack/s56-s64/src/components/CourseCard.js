import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CourseCard ({courseProp}) {

    // console.log(props);
    const { name, description, price } = courseProp;
    // Syntax: const [getter, setter function] = useState(initialGetterValue)
    const [ count, setCount ] = useState(0);
    const [ seats, setSeat] = useState(30);

    function enroll(){
        if (seats === 0){
            console.log('Enrollees: ' + count);
            console.log('Available Seats: ' + seats)
            alert("no more seats")
        } else {
            setSeat (seats - 1);
            setCount(count + 1);
            console.log('Enrollees: ' + count);
            console.log('Available Seats: ' + seats);
        } 

        
    }
	return (
		<Card id="courseComponent1">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>Php {price}</Card.Text>
                <Card.Text>Enrollees: {count}</Card.Text>
                <Button variant="primary" onClick={enroll}>Enroll</Button>
            </Card.Body>
        </Card>
	)
}