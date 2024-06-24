import React, { useEffect, useState } from 'react'
import "../Comment/Comment.scoped.css"
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import {useDispatch , useSelector} from "react-redux"
import Avatar from 'react-avatar'
import { getComments } from '../../rtk/Slices/Comments';
import { useSearchParams } from 'react-router-dom';
export default function Comments({}) {
const comment = useSelector((state)=>state.commentsGet)
  return (
    <>
    
    
      {comment.map((comment)=> {
    return(
        <div className='comment mb-4  '>
            <div className='d-flex align-items-center mb-1'>
                 <Avatar src={comment.name ? "" : comment.snippet.topLevelComment.snippet.authorProfileImageUrl } size='40px' round='20px' className='me-2' />
            <div>
                <p >{ comment.name ? comment.name :comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
                <p> {comment.comment ? comment.comment : comment.snippet.topLevelComment.snippet.textDisplay.slice(0,100)}</p>
            </div>
            </div>
           
            <div className='d-flex mt-2 align-items-center ms-4'>
                <div className='d-flex align-items-center'>
                    <p>{comment.likes ? comment.likes :comment.snippet.topLevelComment.snippet.likeCount }</p>
                    <GrLike size={'40px'} className='ms-1 reactions'   />
                </div>

<GrDislike  size={'40px'} className='ms-3 reactions'/>
            </div>

</div>
    )
   } )}


    </>
  )
}
