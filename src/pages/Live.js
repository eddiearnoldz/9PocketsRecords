import AllTourDates from "../components/Dates Table/AllTourDatesTable"
import BandTourDatesTable from "../components/Dates Table/BandTourDatesTable"

const Live = () => {
  return (
    <>
     <h1 className="text-center mb-10">Latest gigs</h1>
    <AllTourDates/>
    <BandTourDatesTable name="LEAP"/>
    </>
   
  )
}
export default Live