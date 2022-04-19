import { Link } from "react-router-dom"

const Home = () => {

  return (
    <>
      <div className="grid h-full">
      <div classname="p-6 content-center">
        <div className="sm:grid grid-cols-3 m-5">
          <div className="flex flex-col "><Link to='/artists/leap'><img className="rounded" src="/images/LEAP/BLOOD & WINE_Artwork_Final.jpg" alt=""></img></Link></div>
          <div className="flex flex-col "><Link to='/artists/mulimba'><img className="rounded" src="/images/MULIMBA/MUL CG FINAL.jpg" alt=""></img></Link></div>
          <div className="flex flex-col"><Link to='/artists/neckandneck'><img className="rounded" src="/images/N&N/N&N_CIWYL_Artwork_FIX.jpg" alt=""></img></Link></div>
          <div className="flex flex-col"><Link to='/artists/mulimba'><img className="rounded" src="/images/MULIMBA/MULIMBA_BID_FINAL.jpg" alt=""></img></Link></div>
          <div className="flex flex-col"><Link to='/artists/neckandneck'><img className="rounded" src="/images/N&N/N&N_BL_AW_FINAL.jpg" alt=""></img></Link></div>
          <div className="flex flex-col"><Link to='/artists/leap'><img className="rounded" src="/images/LEAP/WTSG ARTWORK.jpg" alt=""></img></Link></div>
          <div className="flex flex-col"><Link to='/artists/leap'><img className="rounded" src="/images/LEAP/NLTD ARTWORK.jpg" alt=""></img></Link></div>
          <div className="flex flex-col"><Link to='/artists/mulimba'><img className="rounded" src="/images/MULIMBA/H.I.G. FINAL ARTWORK.jpg" alt=""></img></Link></div>
          <div className="flex flex-col"><Link to='/artists/leap'><img className="rounded" src="/images/LEAP/Potions_AW_Final.JPG" alt=""></img></Link></div>
          </div>
        </div>
      </div>
    </> 
  )
}

export default Home

