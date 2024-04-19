import React from 'react'
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <div className="bg-gray-800 h-screen w-64">
      <div className="text-white text-3xl font-semibold p-4">HelloDash</div>
      <ul className="text-white">
      <Link to="/"><li className="p-4 hover:bg-gray-700"><a href="#">Dashboard</a></li></Link>
        <Link to="/Advertising"><li className="p-4 hover:bg-gray-700"><a href="#">Advertising</a></li></Link>
        <Link to="/Calender"><li className="p-4 hover:bg-gray-700"><a href="#">Calendar</a></li></Link>
        <Link to="/Statistics"><li className="p-4 hover:bg-gray-700"><a href="#">Statistics</a></li></Link>
        <Link to="/Payments"><li className="p-4 hover:bg-gray-700"><a href="#">Payments</a></li></Link>
        <li className="p-4 hover:bg-gray-700 items-start justify-start mt-40 ">Others</li>
        <li className="p-4 hover:bg-gray-700"><a href="#">Profile</a></li>
        <li className="p-4 hover:bg-gray-700"><a href="#">Settings</a></li>
        <li className="p-4 hover:bg-gray-700"><a href="#">Help</a></li>
      </ul>
    </div>
  )
}

export default Sidebar