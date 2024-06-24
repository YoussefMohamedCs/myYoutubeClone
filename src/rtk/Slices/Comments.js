import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { Api_key } from "../../constant/AppConstant";


export const getComments = createAsyncThunk(
    'commentSlice/getComments' , async (vidId)=>{
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=${Api_key}&textFormat=plainText&part=snippet&videoId=${vidId}&maxResults=100`)
        return (res?.data?.items)
    }   
)





const commentSlice = createSlice({
    initialState:[],
    name:"commentSlice",
    reducers:{ addComment :(state , action)=>{
        state.unshift(action.payload);
    }}
    ,
    extraReducers:(builder)=>{
        builder.addCase(getComments.fulfilled , (state , action)=>{
            return action.payload;
        })

    }
})


export const {addComment} = commentSlice.actions;
export default commentSlice.reducer;