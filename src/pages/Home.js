import { Link } from "react-router-dom"

const Home = () => {

  return (
    <>
      <div className="md:grid h-full place-items-center justify-center">
          <div className="md:grid grid-cols-3 mx-5 max-w-6xl ">
            <div className="hover:scale-105 duration-300 p-3 object-fit relative group text-xl text-center">
              <Link to='/artists/mulimba'>
                <img className="rounded-md z-1" src="/images/MULIMBA/mulimba release post.jpg" alt="MULIMBA"/>
                <div className=" invisible group-hover:visible">MULIMBA</div>
              </Link>
            </div>
            <div className="hover:scale-105 duration-300 p-3 object-fit relative group text-xl text-center">
              <Link to='/artists/leap'>
                <img className="rounded-md" src="/images/LEAP/LEAP 01.jpg" alt="LEAP"/>
                <div className=" invisible group-hover:visible ">LEAP</div>
              </Link>
            </div>
            <div className="hover:scale-105 duration-300 p-3 object-fit relative group text-xl text-center">
              <Link to='/artists/neckandneck'>
                <img className="rounded-md" src="/images/N&N/AfterlightImage.jpg" alt="NECK&NECK"/>
                <div className=" invisible group-hover:visible text-white">NECK&NECK</div>
              </Link>
            </div>
          </div>
      </div>
    </> 
  )
}

export default Home

