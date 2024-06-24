import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { youtube_api_url } from "../../constant/AppConstant";



export const getApi = createAsyncThunk(
   'ytApi/getApi'  , async ()=>{
    try{
        const res = await axios.get(`${youtube_api_url}`)
return res;
    }
    catch(error){
        console.log("error")

    }

   }
)
const ytApi = createSlice({
    initialState:[],
    name :"ytApi", 
    extraReducers:(builder)=>{
        builder.addCase(getApi.fulfilled , (state , action)=>{
            state = action.payload;
            
        })

    }
})


export default ytApi.reducer;