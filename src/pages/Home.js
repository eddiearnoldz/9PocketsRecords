import { Link } from "react-router-dom"

const Home = () => {

  
  return (
    <>
      <div className="grid h-full content-center justify-center">
          <div className="md:grid grid-cols-3 m-5 max-w-3xl max-h-72">
            <div className=" hover:scale-105 duration-300 p-3 object-fit"><Link to='/artists/mulimba'><img className="rounded" src="/images/MULIMBA/mulimba release post.jpg" alt=""></img></Link></div>
            <div className="hover:scale-105 duration-300 p-3 object-fit"><Link to='/artists/leap'><img className="rounded" src="/images/LEAP/LEAP 01.jpg" alt=""></img></Link></div>
            <div className="hover:scale-105 duration-300 p-3 object-fit"><Link to='/artists/neckandneck'><img className="rounded" src="/images/N&N/AfterlightImage.jpg" alt=""></img></Link></div>
          </div>
      </div>
    </> 
  )
}

export default Home

