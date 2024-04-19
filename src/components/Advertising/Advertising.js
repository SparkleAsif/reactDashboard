import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages, removeChat } from '../../redux/features/chats/chatSlice'

function Advertising() {
  const {messages,isLoading,isError,errMessages}=useSelector(state=>state.chats)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getMessages())
  },[])
  if(isError){
    return <div>
      sorry something went wrong
    </div>
  }
  if(isLoading){
    return <div>isLoading</div>
  }
  return (
    <div>
      lng :{messages.length}
    <div className='grid grid-cols-2 gap-5 mt-2'>  {messages.map(single=><div className='shadow p-2 border border-red-300 ' key={single.id}>
      <h2>{single.title}</h2>
      <button onClick={()=>{
        dispatch(removeChat(single.id))
      }} className='p-2 bg-red-500 rounded mt-2 '>Delete</button>
    </div>)}</div>
    </div>
  )
}

export default Advertising