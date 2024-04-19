// [SECTION] Creating React Application:
	// Syntax:
		npx create-react-app <project-name>

// Delete unnecessary files from the app
	// application > src
	App.test.js
	index.css
	logo.svg
	reportWebVitals.js
	setupTests.js

// [SECTION] React JSX
/*
	The syntax used in Reactjs is JSX.

		- JSX - Javascript + XML
			- It is an extension of Javscript that lets us create objects which will then be compiled and added as HTML elements.
		- With JSX, we are able to create HTML elements and integrate JS codes.

*/

// [SECTION] ReactJS Component

/*
		- These are reusable parts of our react application.
		- They are independent UI parts of our app.
		- Components are functions that return react elements.
		- Components naming Convention: PascalCase
			- Capitalized first letter for all words of the function name AND file name associated with it.
*/

// [SECTION] React import pattern:

/*
	-imports from built-in react modules.
	-imports from downloaded packages
	-imports from user defined components

	Syntax:
		import { moduleName/s } from "file path"
*/


// [SECTION] Props and State Hooks

/*
	Props
		- is a shorthand for "property" since components are considered as object in ReactJS
		- is a way to pass data from a parent component to a child component.
		- it is synonymous to function parameters.
		- it is used like an HTML attribute added to the child component.	

	States
	- States are a way to store information within a component. This information can then be updated within the component. 
	- States are used to keep track of information related to individual components.

*/

/*
	Hooks 
	- Special/react-defined methods and functions that allow us to do certain tasks in our components.
		- useState()
		- useEffect()
		- useContext()
	
*/

// [SECTION] Effect Hooks

/*
	- Effect hooks in React allow us to execute a piece of code whenever a component gets rendered to the page or if the value of a state changes.

	- useEffect() allows us to perform "side effects" in our components or run a specifc task. 
	- Some examples of side effects are: fetching data, directly updating the DOM, and timers. 

	Syntax:
		useEffect(function, [dependency])

	- useEffect() always runs the task on the initial render and/or every render (when a state changes in a component).
	- Initial render is when the component is run or displayed for the first time.

	1. No dependecy array passed
		- If the useEffect() does not have a dependency array, it will run on every render of the component
		
		useEffect(()=>{
			console.log("Will run on initial render or on every changes with our components");
		});

	2. An empty array
		- If the useEffect() has dependency array but it is empty, it will only run on the initial render.
		
		useEffect(()=>{
			console.log("Will only run on initial render.");
		}, []);

	3. With dependency array (props or state values);
		- If the useEffect() has a dependency array and there is state or data in it, the useEffect will run whenever that state is updated.
		
		useEffect(()=>{
			console.log("Will run on initial render and every change on the dependency value.");
		}, [seats]);

	Resources:
	https://www.w3schools.com/react/react_useeffect.asp#:~:text=The%20useEffect%20Hook%20allows%20you,useEffect%20accepts%20two%20arguments.
*/

/* [SECTION] Routing
	
	- React JS is a single page application (SPA)
	- Whenever a link is clicked, it functions as if the page is being reloaded but what it actually does is it goes through the process of rendering, mounting, rerendering and unmounting components
		- When a link is clicked, React JS changes the url of the application to mirror how HTML accesses its urls
		- It renders the component executing the function component and its expressions
		- After rendering, it mounts the component displaying the elements
		- Whenever a state is updated or changes are made with React JS, it rerenders the component
		- Lastly, when a different page is loaded, it unmounts the component and repeats this process
	- The updating of the user interface closely mirrors that of how HTML deals with page navigation with the exception that React JS does not reload the whole page

	- The `BrowserRouter` component will enable us to simulate page navigation by synchronizing the shown content and the shown URL in the web browser.
	- The `Routes` component holds all our Route components. It selects which `Route` component to show based on the URL Endpoint.
		- For example, when the `/courses` is visited in the web browser, React.js will show the `Courses` component to us.
	
*/

/* [SECTION] React Context API
	
	- React Context API (useContext) - provides a way to share values (state) between components without having to explicitly pass a "prop" through each component.

	- React Context
		- Allows us to pass down and use (consume) data in any component we need in our React application without using "props".
		- In other words, React context allows us to share data (state, function, etc.) across components more easily.

		3 simple steps in using react context:
			1. Creating the context
			2. Providing the context
			3. Consuming the context

	- We store information in the context by providing the information using the "UserProvider" component and passing the information via the "value" prop.
	- All the information inside the value prop will be accessible to pages/components wrapped around with the UserProvider.
	- Wrapping all components in the app within UserProvider allows re-rendering when the "value" prop changes

*/