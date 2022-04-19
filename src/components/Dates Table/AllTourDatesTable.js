import { BandDates } from '../../tourDates/BandDates'

const AllTourDatesTable = () => {
  return (
    <>
  <table className="grid table-auto place-items-center">
  <tbody>
    { BandDates.map((data, key) => {
      return (
        <tr key={key}>
          <td className="border px-4 py-2">{data.band}</td>
          <td className="border px-4 py-2">{data.Location}</td>
          <td className="border px-4 py-2">{data.Date}</td>
          <td className="border px-4 py-2 hover:scale-110"><a href={data.link}>Tickets</a></td>
      </tr>
      )     
    })
  }
  </tbody>
  </table>
    </>
  )
}

export default AllTourDatesTable