import React, { useState } from 'react';

const OneWay = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    // const [returnDate, setReturnDate] = useState('');
    const [passengerCount, setPassengerCount] = useState(1);

    const handleSearch = () => {
         
        console.log('Searching...');
    };
    return (
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
    );
};

export default OneWay;