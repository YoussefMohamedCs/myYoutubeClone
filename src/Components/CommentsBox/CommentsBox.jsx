import React, { useEffect, useState } from 'react'
import "../CommentsBox/CommetsBox.scoped.css"
import { IoMdSend } from "react-icons/io";
import {useDispatch , useSelector} from "react-redux"
import { getComments  , addComment} from '../../rtk/Slices/Comments';
import { useSearchParams } from 'react-router-dom';
import Avatar from 'react-avatar'
import Comments from '../Comment/Comments'
export default function CommentsBox({}) {
    const [searchParams] = useSearchParams();
    const vidId = searchParams.get('v')
    const dispatch = useDispatch();
    const state = useSelector((state)=> state.commentsGet)
    
    useEffect(()=>{
        dispatch(getComments(vidId))
    } , [vidId])
    useEffect(()=>{
    dispatch(getComments(vidId))
    } , [])
    console.log(state)

    const [newComment , setNewComment] = useState("")
     function getEnter(e){
        setNewComment({name:"youssef" , comment:e.target.value , likes: "0"})
if(e.keyCode === 13){

    dispatch(addComment(newComment))
}
    }
  return (
    <div className='commnetsBox'>
       <h1 className='headerofbox'>Comments :100 </h1>
       <div className="boxToAdd d-flex mt-3 mb-4 align-items-center">
       <Avatar size='40px' round="20px" className='me-2'/>
        <input type="text" placeholder='add commnet' className='w-100 inputComment' onKeyUp={(e)=>getEnter(e)}   />

       
       </div>
    <Comments comment={state}  />
     
    </div>
  )
}
