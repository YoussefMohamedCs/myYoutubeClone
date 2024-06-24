import { configureStore } from "@reduxjs/toolkit";
import openSlice from "../Slices/Open-slice"
import Ytapi from "../Slices/Ytapi";
import commentSlice from "../Slices/Comments"
import videoSlice from "../Slices/Video"
export const store=configureStore({
    reducer:{
open:openSlice ,
ytA : Ytapi ,
commentsGet : commentSlice ,
videoList : videoSlice ,

    }
})