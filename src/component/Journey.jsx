import React, { useState , useEffect} from 'react';
import { getFlights } from '../data/flight_data'


const FlightOffersTable = ({ flightOffers }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border w-full">
          <thead>
            <tr>
              <th className="p-3 border-r border-b">Departure</th>
              <th className="p-3 border-r border-b">Arrival</th>
              <th className="p-3 border-r border-b">Duration</th>
              <th className="p-3 border-r border-b">Price</th>
              <th className="p-3 border-r border-b">Fare Basis</th>
              <th className="p-3 border-r border-b">Class</th>
              <th className="p-3 border-r border-b">Seat</th>
            </tr>
          </thead>
          <tbody >
            {flightOffers.map((offer, index) => (
              <React.Fragment key={index} className="p-3 border-r border-b">
                {offer.itineraries.map((itinerary, i) => (
                  <React.Fragment key={`${index}-${i}`}>
                    {itinerary.segments.map((segment, j) => (
                      <tr key={`${index}-${i}-${j}`}>
                        <td className="">{segment.departure.iataCode}</td>
                        <td className="">{segment.arrival.iataCode}</td>
                        <td className="">{itinerary.duration}</td>
                        <td className="">{offer.price}</td>
                        <td className="">{offer.fareBasis[0].join(', ')}</td>
                        <td className="">{offer.class[0].join(', ')}</td>
                        <td className="">{offer.seat[0].join(', ')}</td>

                      </tr>
                    ))}

                    {/* Add border row after each set of itineraries */}
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
  //   const { departureIataCode, arrivalIataCode, departureAt } = params
  const [flightOffers, setflightOffers] = useState(getFlights());
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  // const [returnDate, setReturnDate] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);

  console.log({flightOffers})

  const handleSearch = () => {
    //
    setflightOffers(getFlights({ departureIataCode: from, arrivalIataCode: to, departureAt: departureDate }))
  };

  useEffect(()=> {
    // setflightOffers(getFlights())
  },[])

  


  return (
    <div>
      <div className='py-8'>
        <div className='flex items-center gap-4 py-8 border-t-2 border-indigo-500 border-b-2 border-indigo-500'>
          <input
            className='p-2 border border-gray-900'
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder='From'
          />
          <input
            className='p-2 border border-gray-900'
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder='To'
          />
          <input
            className='p-2 border border-gray-900'
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            placeholder='Departure Date'
          />
          {/* <input
                    className='p-2 border border-gray-900'
                    type="name"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    placeholder='Return Date'
                /> */}
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