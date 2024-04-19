import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../redux/features/chats/chatSlice';


function Dashboard() { 
const data=useSelector(state=>state.chats)
  const dispatch=useDispatch()
  return (
    <div>
      <div className='flex  justify-between w-full '>

<div className=' w-[70%] py-[20px]'>
    <div className="flex">
    <div className="flex-1 mx-2 bg-gradient-to-r from-yellow-500 to-red-500 text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Icon Box 1</h2>
        <p className="mt-2">Content for Icon Box 1</p>
    </div>
    <div className="flex-1 mx-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Icon Box 2</h2>
        <p className="mt-2">Content for Icon Box 2</p>
    </div>
    <div className="flex-1 mx-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Icon Box 3</h2>
        <p className="mt-2">Content for Icon Box 3</p>
    </div>
    </div>
    <div className='border border-blue-900 rounded-lg my-[20px] '>
        <img src="https://img.freepik.com/free-vector/infographic-templates-progress-analysis-charts-graph_53876-57969.jpg" alt="" className='w-full rounded-lg' />
    </div>
</div>

<div className="flex flex-col bg-gray-100 h-[450px] m-5 w-[30%] rounded-md items-center py-[30px]">


{/* User Profile Image, Name, and Location */}
<div className="flex justify-center">
          <img
            className="h-32 w-32 rounded-full object-cover"
            src="https://assets-global.website-files.com/619e8d2e8bd4838a9340a810/647c106477f8934b266ba39c_profile-picture-og.webp"
            alt="Profile"
          />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-xl font-semibold">Jenny Branka</h1>
          <div className='flex flex-row items-center justify-center'>
          <IoLocationOutline />
          <p className="text-gray-600"> New York, USA</p>
          </div>
        </div>
<div className="mt-6 flex justify-around">
{
  data.value.map(single=><div>
    name ;{single.name}
  </div>)
}
          <div className="text-center">
            <p>100</p>
            <p className="text-gray-700 font-semibold">Post</p>
          </div>
          <div className="text-center">
            <p>500</p>
            <p className="text-gray-700 font-semibold">Followers</p>
          </div>
          <div className="text-center">
            <p>200</p>
            <p className="text-gray-700 font-semibold">Following</p>
          </div>
        </div>
{/* User Post, Followers, and Following */}
<div className="flex justify-center mt-6">
          <button onClick={()=>{
              dispatch(addChat())
          }} className="bg-blue-500 text-red-900 px-4 py-2 rounded-full mr-4">
            Add to List
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full mr-4">
            Call
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full">
            Message
          </button>
        </div>
{/* buttons */}
</div>
</div>
    </div>

     
  )
}

export default Dashboard