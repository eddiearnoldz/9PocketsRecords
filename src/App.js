import {BrowserRouter, Routes, Route} from 'react-router-dom'

//import components
import NavBar from './components/NavBar';
import About from './pages/About';
import Artists from './pages/Artists';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import Live from './pages/Live';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/live" element={<Live />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
