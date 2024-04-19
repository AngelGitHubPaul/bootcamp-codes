import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AppNavBar from './components/AppNavBar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';

function App() {
  return (
    <Router>
      <Container>
        <AppNavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/courses" element={<Courses />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Logout />}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
