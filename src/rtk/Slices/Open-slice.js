import { createSlice } from "@reduxjs/toolkit";

const openSlice = createSlice({
    initialState:true,
    name:'openSlice' ,
    reducers:{
        cahngeOpen:(state )=>{
            state = state?false :  true;
            return state;
        }
    }
})

export const {cahngeOpen} = openSlice.actions;
export default openSlice.reducer;