import AllTourDates from "../components/Dates Table/AllTourDatesTable"

const Live = () => {

  return (
    <>
     <div className="grid place-items-center h-full">
       <div>
        <h1 className="text-center mb-10">Latest gigs</h1>
        <AllTourDates/>
       </div>
      </div>
    </>
  )
}
export default Live