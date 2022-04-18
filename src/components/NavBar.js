import { Link } from "react-router-dom"
const NavBar = () => {
return (
  <nav className='md:flex justify-between items-center bg-black sticky top-0 z-20'>
    <div className= "flex items-center justify-between">
    <Link to="/"><img className='h-10 w-51 m-3 ml-10 'src={'/images/9Plogo.png'} alt="logo"/></Link>
    <Link to="/"><img className='h-7 w-7 m-3 ml-10 cursor-pointer md:hidden block'src={'images/white-menu-icon-4.jpg'} alt="logo"/></Link>
    </div>

    
    <ul className="
    md:static fixed bottom-40 top-12 
    md:flex 
    xl:space-x-11 lg:space-x-9 md:space-x-7 items-center 
    md:bg-transparent bg-black bg-opacity-75 
    md:w-auto w-full
    text-white 
    md:space-y-0 sm:space-y-7 space-y-5 text-center p-5">
      <li><Link to="/artists">Artists</Link></li>
      <li><Link to="/commercial">Commercial/film</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
    </ul>
  </nav> 
)
}

export default NavBar

//"flex justify-between items-center text-white space-x-7 m-5"