import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CourseCard ({courseProp}) {

    // console.log(props);
    const { name, description, price } = courseProp;

    // Use the state hook for this component to be able to store its state
    // States are used to keep track of information related to individual components
    // Syntax: const [getter, setter function] = useState(initialGetterValue)
    const [ count, setCount ] = useState(0);
    const [seats, setSeats] = useState(30);

    // Function that keeps track of the enrollees for a course
    // By default JavaScript is synchronous it executes code from the top of the file all the way to the bottom and will wait for the completion of one expression before it proceeds to the next
    // The setter function for useStates are asynchronous allowing it to execute separately from other codes in the program
    // The "setCount" function is being executed while the "console.log" is already completed resulting in the value to be displayed in the console to be behind by one count
    function enroll(){
        if (seats > 0) {
            setCount(count + 1);
            console.log('Enrollees: ' + count);
            setSeats(seats - 1);
        } else {
            alert("No more seats.");
        };
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