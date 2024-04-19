import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:[],
//   start
    users:[],
    isLoading:true,
    isError:false,
    errorMessage:''

}
export const getUsers=createAsyncThunk('message/allMessage',async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/todos')
    const result= await response.json()
  return result  
})

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
   addChat:(state,action)=>{
    state.value.push(action.payload)
   },
   removeChat:(state,action)=>{
    const id=action.payload;
    state.users=state.users.filter(single=>single.id!==id)
   }
  },
  extraReducers:builder=>{
    builder
    .addCase(getUsers.pending,(state,action)=>{
        state.isLoading=true;
        state.isError=false
        state.errorMessage=''
    })
    .addCase(getUsers.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.isError=false
        state.errorMessage=''
        state.users=action.payload
    })
    .addCase(getUsers.rejected,(state,action)=>{
        state.isLoading=false;
        state.isError=true
        state.errorMessage=action.payload 
    })
  }
})

// Action creators are generated for each case reducer function
export const { addChat,removeChat } = userSlice.actions

export default userSlice.reducer