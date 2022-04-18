import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

//import components
import NavBar from './components/NavBar';
import About from './components/About';
import Artists from './components/Artists';
import Commercial from './components/Commercial';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/commercial" element={<Commercial/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
   
  )
}

export default App;
