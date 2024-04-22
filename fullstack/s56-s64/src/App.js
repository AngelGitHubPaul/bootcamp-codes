import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseView from './pages/CourseView';
import AddCourse from './pages/AddCourse';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Error from './pages/Error';
import Profile from './pages/Profile';
import {UserProvider} from './UserContext'

function App() {

    const [user,setUser] = useState({
        id: null,
        isAdmin: null
    })

    // Function for clearing the localStorage
    const unsetUser = () => {localStorage.clear()}

    useEffect(() => {
        // console.log(user)
        fetch('http://localhost:4000/users/details', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.user) {
                setUser({
                    id: data.user._id,
                    isAdmin: data.user.isAdmin
                })
            } else {
                setUser({
                    id: null,
                    isAdmin: null
                })
            }
            
        })
    }, [])

  return (
    <UserProvider value={{user, setUser , unsetUser}}>
        <Router>
            <Container fluid>
                <AppNavBar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/courses" element={<Courses />}/>
                    <Route path="/courses/:courseId" element={<CourseView />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/addCourse" element={<AddCourse/>}/>
                    <Route path="/logout" element={<Logout />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="*" element={<Error />} />
                </Routes>
            </Container>
        </Router>
    </UserProvider>
  );
}

export default App;
