import React from 'react';
import { NavLink } from 'react-router-dom';

import Journey from './Journey';

const Home = () => {
     const homeNav =[
        {
            id: 1,
            name:"Round Trip",
            path: '/round trip'
        },
        {
            id: 2,
            name:"One Way",
            path: '/one way'
        },
        {
            id: 3,
            name:"Multi City",
            path: '/multi city'
        },
     ]
    return (
        <div className='px-32'>
            <div className=' '>
                <h2 className='text-3xl font-semibold py-8'>Master Price</h2>
                <hr className='border-t-2 border-gray-600 my-4'/>

                <div className='flex items-center justify-center'>
                   <ul className='flex gap-8 items-center'>
                    {homeNav.map(trip => (
                        <li key={trip.id} className=' p-2 border-2 rounded-lg border-indigo-600 hover:bg-[#031f24] hover:text-white'>
                          <NavLink to={trip.path}>{trip.name}</NavLink>
                        </li>
                    ))}
                   </ul>
               </div>

               {/* <OneWay/> */}

               <Journey/>

            </div>
        </div>
    );
};

export default Home;
