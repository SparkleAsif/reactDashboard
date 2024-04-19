import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, NavLink} from 'react-router-dom'
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


 
export default function Header() {
    return (
        <div className="bg-sky-900 py-4 px-6 flex justify-between items-center text-white">
      {/* Search Box */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white px-3 py-1 w-100% rounded-md mr-4 focus:outline-none text-black"
        />
        <FaSearch className='text-3xl cursor-pointer'/>

        
        </div>

      
      <div className="mr-4">
        
        <span className="text-xl"><FaMessage className='text-3xl' /></span>
      </div>    
      <div className="mr-4">
      <FaBell className='text-3xl'/>

        {/* You can replace this with an icon or SVG for notification icon */}
        <span className="text-xl"><FontAwesomeIcon icon="fa-solid fa-bell" /></span>
      </div>

      {/* Profile */}
      <div>
        {/* You can replace this with a profile picture or an icon */}
        <FaUserCircle className='text-3xl' />
      </div>
    </div>
    );
}

