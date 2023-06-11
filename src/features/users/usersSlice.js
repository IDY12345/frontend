import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:'0',name:"Ishaan"
    },
    {
        id:'1',name:"Tanay"
    },
    {
        id:'2',name:"Pratham"
    }
    
]

export const userSlice=createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers=(state)=>state.users;

export default userSlice.reducer;