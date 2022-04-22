import YoutubeEmbedder from "../../components/YouTubeEmbedder";
import BandTourDatesTable from "../../components/Dates Table/BandTourDatesTable";

const NeckAndNeck = () => {
  return (
    <>
    <div className="md:grid place-items-center h-full">
      <div className="p-6 max-w-3xl content-center ">
        <div className="grid grid-cols-6 gap-5">
          <div className="flex flex-col my-5 col-start-3 col-end-5">
            <img className="" src="/images/N&N/Logo/N+N_symbol-white.png"  alt=""></img>
          </div>
          <div className="flex flex-col col-span-6 my-5">
            <img className="rounded" src="/images/N&N/spotofy banner.jpg" alt="pressImg"/>
          </div>
          <div className="flex flex-col col-start-2 col-span-4 text-center text-sm m-5 ">
          <p className="text-white italic pb-2">“Gorgeous, atmospheric sound with lovely vocals”</p>
          <p> BBC INTRODUCING </p>
          </div>
          <div className="flex flex-col col-span-6 text-center m-5">
            <p className="text-white">Neck&Neck is the new genre-bending artist project from award-winning writer-producer duo 9Pockets.
                Having worked together for the past few years on a number of artist, commercial and film projects in their London Fields studio, 
                Tom Leach and Joey Arnold have finally honed in on a sound that is truly unique.
            </p>
          </div>
          <div className="flex flex-col col-span-6 my-5">
            <iframe className="rounded" title="NeckAndNeck" src="https://open.spotify.com/embed/artist/5VLS4wPeZEglCmEM4DHVNr?utm_source=generator" width="100%" height="280" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>
          <div className="grid sm:col-span-3 col-span-6 my-5 m-1">
            <img className="rounded" src="/images/N&N/N&N_CIWYL_Artwork_FIX.jpg" alt=""/>
          </div>
          <div className="grid sm:col-span-3 col-span-6 my-5 m-1">
            <img className="rounded" src="/images/N&N/N&N_BL_AW_FINAL.jpg" alt=""/>
          </div>
          <div className="flex flex-col col-span-6 m-5">
            <YoutubeEmbedder embedId="t-FSWVqyxIo?modestbranding=1&rel=0"/>
          </div>
          <div className="flex flex-col col-span-6 m-5">
            <YoutubeEmbedder embedId="WxJ1s9ze0dM?modestbranding=1&rel=0"/>
          </div>
          <div className="flex flex-col col-span-6 mb-10">
            <h1 className="text-center py-2">NECK&NECK's Tour Dates</h1>
            <BandTourDatesTable name="NECK&NECK"/>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default NeckAndNeck