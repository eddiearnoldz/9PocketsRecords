import YoutubeEmbedder from "../../components/YouTubeEmbedder"
import BandTourDatesTable from "../../components/Dates Table/BandTourDatesTable"

const Leap = () => {

  return (
    <>
      <div className="md:grid place-items-center h-full">
        <div className="p-6 max-w-3xl content-center ">
          <div className="grid grid-cols-6 gap-5">
            <div className="flex flex-col my-5 col-start-3 col-end-5">
              <img className="" src="/images/LEAP/LEAP_red3.png"   alt=""></img>
            </div>
            <div className="flex flex-col col-span-6 my-5">
              <img className="rounded" src="/images/LEAP/LEAP Landscape.jpg" alt="pressImg"/>
            </div>
            <div className="flex flex-col col-start-2 col-span-4 text-center text-sm m-5 ">
            <p className="italic pb-2">“Perfectly executed, gloomy alternative rock”</p>
            <p className="pb-4"> EARMILK </p>
            <p className="italic pb-2">“The kind of music the repeat button was made for”</p>
            <p> INDIEISNOTAGENRE </p>
            </div>
            <div className="flex flex-col col-span-6 text-center m-3">
              <p className="text-white pb-5">
                LEAP is a plethora of rock and roll-induced extremes; a supersonic dance through the depths of Jacky's twisted and brilliant mind. 
                Combining indie grunge, heavy beats, and the odd sprinkle of electronica, 
                Jacky's unique vocals take you on a journey through London's underbelly and his own struggles with mental health.
              </p>
              <p>2021 saw LEAP step up and out of the world of DIY releasing into a more ambitious, 
                more refined sonic palette where they can comfortably compete with the biggest indie-rock acts around. 
                Inspired by the likes of Fontaines DC, 21 Pilots and Yungblud, 
                LEAP sold out their debut headline show at Omeara Feb 2020 (1 week before lockdown) 
                as well as receiving support from BBC Intro, Amazing Radio and Spotify's 'Modern Rock' editorial.
                </p>
            </div>
            <div className="flex flex-col col-span-6 my-5">
              <iframe className="rounded" title="LEAP" src="https://open.spotify.com/embed/artist/538iX6YCTybcgzsrjDTrFi?utm_source=generator&theme=0" width="100%" height="280" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            <div className="grid sm:col-span-2 col-span-6 my-5 m-1">
              <img className="rounded" src="/images/LEAP/ENERGIES FINAL ARTWORK.jpeg" alt=""/>
            </div>
            <div className="grid sm:col-span-2 col-span-6 my-5 m-1">
              <img className="rounded" src="/images/LEAP/BLOOD & WINE_Artwork_Final.jpg" alt=""/>
            </div>
            <div className="grid sm:col-span-2 col-span-6 my-5 m-1">
              <img className="rounded" src="/images/LEAP/WTSG ARTWORK.jpg" alt=""/>
            </div>
            <div className="flex flex-col col-span-6 m-5">
              <YoutubeEmbedder embedId="HgYJJliMq8A?modestbranding=1&rel=0"/>
            </div>
            <div className="flex flex-col col-span-6 m-5">
              <YoutubeEmbedder embedId="_By2Tj-Q9qc?modestbranding=1&rel=0"/>
            </div>
            <div className="flex flex-col col-span-6 mb-10">
              <h1 className="text-center py-2">LEAP's Tour Dates</h1>
              <BandTourDatesTable name="LEAP"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Leap