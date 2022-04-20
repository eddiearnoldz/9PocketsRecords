import { Link } from "react-router-dom"

const Home = () => {

  
  return (
    <>
      <div className="grid h-full justify-center">
          <div className="md:grid grid-cols-3 m-5 max-w-6xl max-h-72">
            <div className="hover:scale-105 duration-300 p-3 object-fit group  text-xl">
              <Link to='/artists/mulimba'>
                <img className="rounded-md" src="/images/MULIMBA/mulimba release post.jpg" alt="MULIMBA"/>
                <div className=" invisible group-hover:visible text-center relative bottom-1/2">MULIMBA</div>
              </Link>
            </div>
            <div className="hover:scale-105 duration-300 p-3 object-fit group  text-xl">
              <Link to='/artists/leap'>
                <img className="rounded-md" src="/images/LEAP/LEAP 01.jpg" alt="LEAP"/>
                <div className=" invisible group-hover:visible text-center relative bottom-1/2">LEAP</div>
              </Link>
            </div>
            <div className="hover:scale-105 duration-300 p-3 object-fit group text-xl">
              <Link to='/artists/neckandneck'>
                <img className="rounded-md" src="/images/N&N/AfterlightImage.jpg" alt="NECK&NECK"/>
                <div className=" invisible group-hover:visible duration-300 text-center relative bottom-1/2 text-black">NECK&NECK</div>
              </Link>
            </div>
          </div>
      </div>
    </> 
  )
}

export default Home

