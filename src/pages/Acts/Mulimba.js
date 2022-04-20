import YoutubeEmbedder from "../../components/YouTubeEmbedder"
import BandTourDatesTable from "../../components/Dates Table/BandTourDatesTable"

const Mulimba = () => {
  return (
    <div className="md:grid place-items-center h-full">
      <div className="p-6 max-w-3xl content-center ">
        <div className="grid grid-cols-6 gap-5">
          <div className="flex flex-col my-5 col-start-3 col-end-5">
            <img className="" src="/images/MULIMBA/Mulimba Logo FIX.png"  alt=""></img>
          </div>
          <div className="flex flex-col col-span-6 my-5">
            <img className="rounded" src="/images/MULIMBA/MULIMBA PRESS (landscape).jpg" alt="pressImg"/>
          </div>
          <div className="flex flex-col col-start-2 col-span-4 text-center text-sm m-5 ">
          <p className="text-white italic pb-2">“Soulful, powerful, with anthemic drops”</p>
          <p> LINEOFBESTFIT </p>
          <p className="text-white italic pb-2">“Interweaving gospel and indie-rock to astounding impact”</p>
          <p> NOTION </p>
          </div>
          <div className="flex flex-col col-span-6 text-center m-3">
            <p className="text-white pb-5">Kanye West-inspired gospel beats laced with electro Daft Punk-style hooks provide one of the most 
            aggressively original soundscapes for MULIMBA's indie vocal to shine on. 
            A true artist with his hands firmly wrapped around a sound that he's spent his whole life trying to find, 
            it seems like everything in Ash's life up to this point has been RnD for this very moment in his career.
            </p>
            <p>Having already supported the likes of Tom Walker and Elderbrook, 
            MULIMBA is building towards his debut EP with palpable excitement.
            </p>
           
          </div>
          <div className="flex flex-col col-span-6 my-5">
            <iframe className="rounded" title="MULIMBA" src="https://open.spotify.com/embed/artist/6qXDwwXdqZp0R4MzTSn7jR?utm_source=generator" width="100%" height="280" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>
          <div className="grid sm:col-span-2 col-span-6 my-5 m-1">
            <img className="rounded" src="/images/MULIMBA/MUL CG FINAL.jpg" alt=""/>
          </div>
          <div className="grid sm:col-span-2 col-span-6 my-5 m-1">
            <img className="rounded" src="/images/MULIMBA/MULIMBA_BID_FINAL.jpg" alt=""/>
          </div>
          <div className="grid sm:col-span-2 col-span-6 my-5 m-1">
            <img className="rounded" src="/images/MULIMBA/H.I.G. FINAL ARTWORK.jpg" alt=""/>
          </div>
          <div className="flex flex-col col-span-6 m-5">
            <YoutubeEmbedder embedId="IdMyOcQR338?modestbranding=1&rel=0"/>
          </div>
          <div className="flex flex-col col-span-6 m-5">
            <YoutubeEmbedder embedId="BZsf2SvUiOY?modestbranding=1&rel=0"/>
          </div>
          <div className="flex flex-col col-span-6 mb-10">
            <h1 className="text-center py-2">MULIMBA's Tour Dates</h1>
            <BandTourDatesTable name="MULIMBA"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Mulimba