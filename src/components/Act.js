import YoutubeEmbedder from "./YouTubeEmbedder";
import PropTypes from "prop-types";
import BandTourDatesTable from "./Dates Table/BandTourDatesTable";


const Act = ({ bandLogo, mainImage, bio, spotifyName, spotifyData, video2, video1, image1, image2, image3, band, bites }) => {
  return (
    <>
      <div className="md:grid place-items-center h-full">
        <div className="p-6 max-w-3xl content-center ">
          <div className="grid grid-cols-6 gap-5">
            <div className="flex flex-col my-5 col-start-3 col-end-5">
              <img className="" src={bandLogo} alt=""></img>
            </div>
            <div className="flex flex-col col-span-6 my-5">
              <img className="rounded" src={mainImage} alt="pressImg"/>
            </div>
            <div  className="flex flex-col col-span-6 text-center m-5">
              {JSON.parse(bites).map(bite => <p>{bite}</p>)}
            </div>
            <div className="flex flex-col col-span-6 text-center m-5">
              <p className="text-white">{bio}</p>
            </div>
            <div className="flex flex-col col-span-6 my-5">
              <iframe className="rounded" title={spotifyName} src={spotifyData} width="100%" height="280" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
              
            <div className="grid sm:col-span-2 col-span-6 my-5 m-1">
              <img className="rounded" src={image1} alt=""/>
            </div>
            <div className="grid sm:col-span-2 col-span-6 my-5 m-1">
              <img className="rounded" src={image2} alt=""/>
            </div>
            <div className="grid sm:col-span-2 col-span-6 my-5 m-1">
              <img className="rounded" src={image3} alt=""/>
            </div>
  
            <div className="flex flex-col col-span-6 m-5">
              <YoutubeEmbedder embedId={video1}/>
            </div>
            <div className="flex flex-col col-span-6 m-5">
              <YoutubeEmbedder embedId={video2}/>
            </div>
            <div className="flex flex-col col-span-6 mb-10">
              <h1 className="text-center py-2">{band}'s Tour Dates</h1>
              <BandTourDatesTable name={band}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Act.propTypes = {
  bandLogo: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  bites: PropTypes.array.isRequired,
  spotifyName: PropTypes.string.isRequired,
  spotifyData: PropTypes.string.isRequired,
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  image3: PropTypes.string.isRequired,
  video1: PropTypes.string.isRequired,
  video2: PropTypes.string.isRequired,
  band: PropTypes.string.isRequired,
};
export default Act

