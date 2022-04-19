import {BrowserRouter, Routes, Route} from 'react-router-dom'

//middleware
import ScrollToTop from "./components/middleware/ScrollToTop";

//import components
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import Live from './pages/Live';
import Mulimba from './pages/Acts/Mulimba';
import Leap from './pages/Acts/Leap';
import NeckAndNeck from './pages/Acts/NeckAndNeck';


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/artists/mulimba' element={<Mulimba />}/>
          <Route path='/artists/leap' element={<Leap />}/>
          <Route path='/artists/neckandneck' element={<NeckAndNeck />}/>
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/live" element={<Live />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
