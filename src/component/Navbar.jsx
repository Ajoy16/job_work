import React from 'react';
import Logo from '../assets/39048.jpg'



const Navbar = () => {

    const navItems = [
        {  id: 1,
           text: 'Dashboard',
           path:'/dashboard' 
        },
        { 
            id: 2,
            text: 'Master price',
            path:'/master price' 
        },
        { 
            id: 3,
            text: 'Custom Price',
            path:'/custom Price' 
        },
        { 
            id: 4,
            text: 'Calendar',
            path:'/calendar' 
        },
        { 
            id: 5,
            text: 'Report',
            path:'/report' 
        },
      
        
      ];



    return (
        <div className='flex items-center justify-between px-28 bg-gray-800'>
            <div className='flex items-center gap-5 px-10'>  
              <ul className='hidden md:flex'>
                {navItems.map(item => (
                <li
                key={item.id}
                className='p-4 text-xl text-white rounded-xl m-2 cursor-pointer duration-300 hover:text-yellow-400'
                >
                <a href='#'>{item.text}</a>
            
            </li>
          ))}
        </ul>         
            </div>
            <div className='flex gap-8 items-center px-10 text-white'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
             </svg> 
               <div className='w-10 h-10 rounded-full'>
                 <img className='w-10 h-10 rounded-full' src={Logo} alt="" />
               </div>
             
            </div>
        </div>
    );
};

export default Navbar;