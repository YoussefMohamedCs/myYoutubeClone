import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    initialState:{
        video: [] ,
        category: "all" ,
    } ,
     name :"videoSlice" , 
     reducers:{
        addVideo:(state , action)=>{
           state.video = action.payload;
        } ,
        addCategory:(state , action)=>{
            state.category = action.payload;


        }
     }
})

export const  {addVideo , addCategory } = videoSlice.actions;
export default videoSlice.reducer;