import { Container } from 'react-bootstrap';
import './App.css';
import AppNavBar from './components/AppNavBar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Register from './pages/Register';

function App() {
  return (
    <>
      <AppNavBar />
      <Container>
{/*        <Home/>
        <Courses/>*/}
        <Register/>
        
      </Container>
    </>
  );
}

export default App;
