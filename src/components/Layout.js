import React, { useState } from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar'

function Layout() {
  const [count,setCount]=useState(0)
  return (
    <div className="flex h-screen w-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar className="w-64 bg-sky-200" />

    {/* Main Content */}
    <div className="flex flex-col flex-1 overflow-hidden">
      {/* Header */}
      <Header count={count} className="bg-teal-200" />

      {/* Outlet (For nested routes) */}
      <div className="flex-1 overflow-y-auto">
        <Outlet count={count} />
      </div>
    </div>
  </div>
  )
}

export default Layout