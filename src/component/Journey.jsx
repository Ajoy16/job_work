import React, { useState , useEffect} from 'react';
import { getFlights } from '../data/flight_data'

const FlightOffersTable = ({ flightOffers }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border w-full">
          <thead>
            <tr className='bg-gray-300'>
              <th className="p-3 border-r border-b">Departure</th>
              <th className="p-3 border-r border-b">Arrival</th>
              <th className="p-3 border-r border-b">Duration</th>
              <th className="p-3 border-r border-b">Price</th>
              <th className="p-3 border-r border-b">Fare Basis</th>
              <th className="p-3 border-r border-b">Class</th>
              <th className="p-3 border-r border-b">Seat</th>
              <th className="p-3 border-r border-b w-24 ">Buy</th>
            </tr>
          </thead>
          <tbody >
            {flightOffers.map((offer, index) => (
              <React.Fragment key={index} className="p-3 border-r border-b">
                {offer.itineraries.map((itinerary, i) => (
                  <React.Fragment key={`${index}-${i}`}>
                    {itinerary.segments.map((segment, j) => (
                      <tr key={`${index}-${i}-${j}`}>
                        <td className="bg-gray-100 pl-8 pb-8">{segment.departure.iataCode}</td>
                        <td className="bg-gray-100 pl-8 pb-8">{segment.arrival.iataCode}</td>
                        <td className="bg-gray-100 pl-8 pb-8">{itinerary.duration}</td>
                        <td className="bg-gray-100 pl-8 pb-8">{offer.price}</td>
                        <td className="bg-gray-100 pl-8 pb-8">{offer.fareBasis[0].join(', ')}</td>
                        <td className="bg-gray-100 pl-8 pb-8">{offer.class[0].join(', ')}</td>
                        <td className="bg-gray-100 pl-8 pb-8">{offer.seat[0].join(', ')}</td>
                        {
                          j === 0  && (<td className='relative'><button className="absolute top-3 right-1 p-1 border rounded-lg hover:bg-[#031f24] hover:text-white" >Buy Ticket</button></td>)
                        }
                        
                      </tr>
                    ))}
                    { 
                      <tr key={`border-${index}-${i}`} className="p-3 border-r border-b">
                        <td colSpan="7"></td>
                      </tr>
                    }

                  </React.Fragment>

                ))}
              </React.Fragment>
            ))}

          </tbody>
        </table>
      </div>
    </div>

  );
};

const Journey = () => {
  const [flightOffers, setflightOffers] = useState(getFlights());
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);

  console.log({flightOffers})

  const handleSearch = () => {
    
    setflightOffers(getFlights({ departureIataCode: from, arrivalIataCode: to, departureAt: departureDate }))
  };

  useEffect(()=> {
  },[])

  return (
    <div>
      <div className='py-8'>
        <div className='flex items-center gap-4 py-8 border-t-2 border-indigo-500 border-b-2 border-indigo-500'>
          <input
            className='p-2 border border-gray-900'
            type="text"
            list="options" 
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder='From'
          />
            <datalist id="options">
              <option value="DAC" />
              <option value="AUH" />
              <option value="IST" />
              <option value="BCN" />
              <option value="FCO" />
              <option value="DXB" />
              <option value="KWI" />
              <option value="DOH" />
            </datalist>
          <input
            className='p-2 border border-gray-900'
            type="text"
            list="options"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder='To'
          />
           <datalist id="options">
              <option value="AUH" />
              <option value="IST" />
              <option value="DAC" />
              <option value="FCO" />
              <option value="DXB" />
              <option value="KWI" />
              <option value="DOH" />
            </datalist>
          <input
            className='p-2 border border-gray-900'
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            placeholder='Departure Date'
          />
          <input
            className='p-2 border border-gray-900'
            type="number"
            value={passengerCount}
            onChange={(e) => setPassengerCount(parseInt(e.target.value))}
            placeholder='Passenger Count'
          />
          <button
            className='p-2 border border-gray-900 bg-cyan-900 rounded-lg text-white overflow-hidden'
            onClick={handleSearch}
          >
            SEARCH
          </button>
        </div>
      </div>
      <FlightOffersTable flightOffers={flightOffers} />
    </div>
  );
};

export default Journey;