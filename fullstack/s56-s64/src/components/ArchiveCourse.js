
import Swal from 'sweetalert2'
import {Button} from 'react-bootstrap'

export default function ArchiveCourse({courseId , fetchData, isActive}) {
	
  const archiveToggle = (courseid) => {
    fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}/archive`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
    .then(res => res.json())
		.then(data => {
			console.log(data);
			if(data.message === "Course archived successfully") {
				Swal.fire({
					title: "Success!",
					icon: "success",
					text: 'Course successfully disabled!'
				})
				fetchData();
			} else {
				Swal.fire({
					title: "Error!",
					icon: "error",
					text: 'Please try again'
				})
				fetchData();
			}
		})
  }
  
  const activateToggle = (courseid) => {
    fetch(`${process.env.REACT_APP_API_URL}/courses/${courseId}/activate`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
    .then(res => res.json())
		.then(data => {
			console.log(data);
			if(data.message === "Course activated successfully") {
				Swal.fire({
					title: "Success!",
					icon: "success",
					text: 'Course successfully enabled!'
				})
				fetchData();
			} else {
				Swal.fire({
					title: "Error!",
					icon: "error",
					text: 'Please try again'
				})
				fetchData();
			}
		})
  }
  
  return(
  	<>
    {isActive 
     ? 
    	<Button variant="danger" size="sm" onClick={() => archiveToggle}>Archive</Button>
     : 
    	<Button variant="success" size="sm" onClick={() => activateToggle}>Activate</Button>
    }
    </>
  )
}