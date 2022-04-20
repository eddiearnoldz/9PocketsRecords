import { useState } from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  
  const[showNav, setShowNav] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='md:flex md:justify-between justify-center items-center bg-black sticky top-0 z-20'>
      <div className= "flex items-center justify-between">
        <Link to="/">
          <img 
            className='h-10 w-51 m-3 ml-10 hover:scale-110 duration-300' 
            src={'/images/9Pockets/9Plogo.png'} alt="logo"/>
        </Link>
        <Link to="#">
          <img 
            onClick={() => setShowNav(!showNav)}
            className='h-7 w-7 mr-8 ml-10 cursor-pointer md:hidden block'
            src='/images/9Pockets/white-menu-icon-4.jpg' alt="logo"/>
        </Link>
      </div>

      
      <ul className={
      (showNav ? "right-0" : '-right-full') +
      ` md:static fixed bottom-50 top-12
        md:flex xl:space-x-11 lg:space-x-9
        md:space-x-7 items-center md:bg-transparent bg-black bg-opacity-90 rounded-md
        md:w-auto w-4/12 text-white
        md:space-y-0 sm:space-y-5 space-y-7 text-left pr-20 p-8 transition-right ease-in duration-500`
        }
      >
        <div className="static ">
          <li className="hover:scale-110  duration-300">
            <button className="hover:text-red-700" onClick={()=> setIsOpen(!isOpen)}>Artists</button>
              {isOpen && (
                <div className="rounded-lg w-50 mt-2 md:absolute bg-black opacity-80 text-yellow-500">
                  <li className="block p-1 hover:scale-110 duration-300"><Link to="/artists/mulimba" onClick={() => {setShowNav(!showNav); setIsOpen(!isOpen)}}>MULIMBA</Link></li>
                  <li className="block p-1 hover:scale-110 duration-300"><Link to="/artists/leap" onClick={() => {setShowNav(!showNav); setIsOpen(!isOpen)}}>LEAP</Link></li>
                  <li className="block p-1 hover:scale-110 duration-300"><Link to="/artists/neckandneck" onClick={() => {setShowNav(!showNav); setIsOpen(!isOpen)}}>NECK&NECK</Link></li>
                </div>
              )}
          </li>
        </div>
        <li className="hover:scale-110 hover:text-red-700 duration-300"><Link to="/live" onClick={() => setShowNav(!showNav)}>Live</Link></li>
        <li className="hover:scale-110 hover:text-red-700 duration-300"><Link to="/about" onClick={() => setShowNav(!showNav)}>About</Link></li>
        <li className="hover:scale-110 hover:text-red-700 duration-300"><Link to="/contact" onClick={() => setShowNav(!showNav)}>Contact</Link></li>

      </ul>
    </nav> 
  )
}

export default NavBar