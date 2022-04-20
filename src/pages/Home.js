import { Link } from "react-router-dom"

const Home = () => {

  return (
    <>
      <div className="grid h-full place-items-center justify-center">
          <div className="grid grid-cols-3 mx-5 max-w-6xl">
            <div className="hover:scale-105 sm:col-span-1 col-span-3 duration-300 p-3 object-fit relative group text-center">
              <Link to='/artists/mulimba'>
                <img className="rounded-md z-1" src="/images/MULIMBA/mulimba release post.jpg" alt="MULIMBA"/>
                <div className=" invisible group-hover:visible relative bottom-1/2 py-2 text-3xl font-bold">MULIMBA</div>
              </Link>
            </div>
            <div className="hover:scale-105 sm:col-span-1 col-span-3 duration-300 p-3 object-fit relative group text-center">
              <Link to='/artists/leap'>
                <img className="rounded-md" src="/images/LEAP/LEAP 01.jpg" alt="LEAP"/>
                <div className=" invisible group-hover:visible relative bottom-1/2 py-2 text-3xl font-bold">LEAP</div>
              </Link>
            </div>
            <div className="hover:scale-105 sm:col-span-1 col-span-3 duration-300 p-3 object-fit relative group text-center">
              <Link to='/artists/neckandneck'>
                <img className="rounded-md" src="/images/N&N/AfterlightImage.jpg" alt="NECK&NECK"/>
                <div className="invisible group-hover:visible relative bottom-1/2 py-2 text-black text-3xl font-bold">NECK&NECK</div>
              </Link>
            </div>
            <br></br>
            <br></br>
          </div>
      </div>
    </> 
  )
}

export default Home

//  sm:top-0 top-10 sm:right-0 right-1/2