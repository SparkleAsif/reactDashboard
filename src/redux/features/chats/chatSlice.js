import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:[],
//   start
    messages:[],
    isLoading:true,
    isError:false,
    errorMessage:''

}
export const getMessages=createAsyncThunk('message/allMessage',async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/todos')
    const result= await response.json()
  return result  
})

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
   addChat:(state,action)=>{
    state.value.push(action.payload)
   },
   removeChat:(state,action)=>{
    const id=action.payload;
    state.messages=state.messages.filter(single=>single.id!==id)
   }
  },
  extraReducers:builder=>{
    builder
    .addCase(getMessages.pending,(state,action)=>{
        state.isLoading=true;
        state.isError=false
        state.errorMessage=''
    })
    .addCase(getMessages.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false
        state.errorMessage=''
        state.messages=action.payload
    })
    .addCase(getMessages.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true
        state.errorMessage=action.payload 
    })
  }
})

// Action creators are generated for each case reducer function
export const { addChat,removeChat } = chatsSlice.actions

export default chatsSlice.reducer