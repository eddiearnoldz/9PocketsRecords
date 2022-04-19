import { BandDates } from '../../tourDates/BandDates'
import PropTypes from 'prop-types';

const BandTourDatesTable = ({name}) => {
  return (
    <>
  <table className="grid table-auto place-items-center">
  <tbody>
    { BandDates.filter(act =>  act.band === `${name}`).map((data, key) => {
      return (
        <tr key={key}>
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
};

BandTourDatesTable.propTypes = {
  name: PropTypes.string.isRequired
}

export default BandTourDatesTable