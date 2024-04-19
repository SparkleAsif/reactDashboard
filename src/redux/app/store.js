import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "../features/chats/chatSlice"; 
import { userSlice } from "../features/user/userSlice";


export const store = configureStore({
  reducer: {
    chats:chatSlice,
    users:userSlice
  },
})