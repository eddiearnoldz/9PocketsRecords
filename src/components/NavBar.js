import { useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  const[showNav, setShowNav] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

return (
  <nav className='md:flex md:justify-between justify-center items-center  bg-black sticky top-0 z-20'>
    <div className= "flex items-center justify-between">
    <Link to="/">
      <img 
        className='h-10 w-51 m-3 ml-10 hover:scale-110 duration-300' 
        src={'/images/9Plogo.png'} alt="logo"/>
    </Link>
    <Link to="#">
      <img 
        onClick={() => setShowNav(!showNav)}
        className='h-7 w-7 mr-8 ml-10 cursor-pointer md:hidden block'
        src='/images/white-menu-icon-4.jpg' alt="logo"/>
    </Link>
    </div>

    
    <ul className={
    (showNav ? "right-0" : '-right-full') +
    ` md:static fixed bottom-50 top-12
      md:flex xl:space-x-11 lg:space-x-9
      md:space-x-7 items-center md:bg-transparent bg-black bg-opacity-90 rounded-md
      md:w-auto w-4/12 text-white
      md:space-y-0 sm:space-y-5 space-y-7 text-center sm:text-left pr-20 p-8 transition-right duration-1000`
      }
      onMouseLeave={() => {setShowNav(!showNav); setIsOpen(!isOpen)}}
     >
       <div className="static">
        <li className="hover:scale-110 duration-300">
          <button onClick={()=> setIsOpen(!isOpen)}><Link to="/live">Artists</Link></button>
          {isOpen && (
          <div className="rounded-lg mt-5 duration-700 absolute">
            <li className="block py-1 hover:scale-110 duration-300"><Link to="/artist">Mulimba</Link></li>
            <li className="block py-1 hover:scale-110 duration-300"><Link to="/contact">Leap</Link></li>
            <li className=" block py-1 hover:scale-110 duration-300"><Link to="/live">N&N</Link></li>
          </div>
          )}
        </li>
       </div>
      
      <li className="hover:scale-110 duration-300"><Link to="/live">Live</Link></li>
      <li className="hover:scale-110 duration-300"><Link to="/about">About</Link></li>
      <li className="hover:scale-110 duration-300"><Link to="/contact">Contact</Link></li>

    </ul>
  </nav> 
)
}

export default NavBar