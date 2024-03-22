// document.querySelector('#clicker');
// The document refers to the whole webpage and getElementById is used to select a specific oject based on its id attribute from the document(webpage)
// document.getElementById('clicker');

// Event listeners
// const clicker = document.getElementById('clicker');

// let counter = 0 

// clicker.addEventListener('click', function() {
// 	counter ++;
// 	alert("The button has been clicked " + counter + " times");
// 	console.log('The button has been clicked!');
// });

// Reactive DOM wit fetch
// the fetch() method has one argument by default, the url. A url is a representative address of accessing a resource/data in another machine.
// rhw .then() method will alow us to process the data we retrieve using fetch in another function
// the data returned in our fetch method can be passed into the .then() method where we can recieve it as a parameter
// it is a representation of what we "got" from our server. response.json() is a method to parse the incoming data as a proper JS object we can further process.
// we can then add another .then() method to do something with the processed server response
fetch("https://jsonplaceholder.typicode.com/posts").then(function(response) {
	// console.log(response)
	return response.json()
})
.then(function(data) {
	// console.log(data)
	// this will allow us to trigger the showPosts() function after we fetch() the data from our mock server.
	showPosts(data);
})

// recueves the fetch data as an argument
const showPosts = function(posts) {
	let postEntries = '';

	posts.forEach(function(post) {
		postEntries += `
			<div id="post-${post.id}">
				<h3 id="post-title-${post.id}">${post.title}</h3>
				<p id="post-body-${post.id}">${post.body}</p>
				<button onclick="editPost('${post.id}')">Edit</button>
				<button onclick="deletePost('${post.id}')">Delete</button>
			</div>
		`
	});

	// console.log(postEntries);
	// innerHTML property represents all the elements and text of an element as a string.
	// we can add html elements to another element as string by updating its innerHTML property
	document.querySelector('#div-post-entries').innerHTML=postEntries;
}

document.querySelector('#form-add-post').addEventListener('submit', function() {

	event.preventDefault();

	// lets capture the input elements
	let titleInput = document.querySelector('#txt-title');
	let bodyInput = document.querySelector('#txt-body');

	// then we can check its value property
	// the value property contains the current value of an input element
	// console.log(titleInput.value);
	// console.log(bodyInput.value);
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: 'POST',
		body: JSON.stringify({
			title: titleInput.value,
			body: bodyInput.value,
			userId: 1
		}),
		headers: { 'content-type' : 'application/json'}
	})
	.then(function(response) {
		return response.json()
	})
	.then(function(data) {
		console.log(data);
		alert('Successfully added.');

		// clears the input element upon submission
		titleInput.value = null;
		bodyInput.value = null;
	})


	alert('Successfully added.');
})

// Edit the post. this function will add the id passed from the button and the details from the post to be edited.
const editPost = function(id) {
	let title = document.querySelector(`#post-title-${id}`).innerHTML;
	let body = document.querySelector(`#post-body-${id}`).innerHTML;

	document.querySelector('#txt-edit-id').value = id
	document.querySelector('#txt-edit-title').value = title;
	document.querySelector('#txt-edit-body').value = body;
	document.querySelector('#btn-submit-update').removeAttribute('disabled');
}

// Update post. This function will run when the edit form is submitted.
document.querySelector('#form-edit-post').addEventListener('submit', function(e){
	e.preventDefault();

	fetch("https://jsonplaceholder.typicode.com/posts/1", {
		method: 'PUT',
		body: JSON.stringify({
			id: document.querySelector('#txt-edit-id').value,
			title: document.querySelector('#txt-edit-title').value,
			body: document.querySelector('#txt-edit-body').value,
			userId: 1
		}),
		headers: {'Content-type': 'application/json'}
	})
	.then(function(response){
		return response.json()
	})
	.then(function(data){
		console.log(data);
		alert('Succesfully updated.');

		document.querySelector('#txt-edit-id').value = null;
		document.querySelector('#txt-edit-title').value = null;
		document.querySelector('#txt-edit-body').value = null;
		document.querySelector('#btn-submit-update').setAttribute('disabled', true);
	});
});

