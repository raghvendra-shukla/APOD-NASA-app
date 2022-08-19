import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <h1 className='text-white text-center'>Astronomy Picture of The Day</h1>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
