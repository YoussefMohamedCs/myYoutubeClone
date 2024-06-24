import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom";
import Avatar from 'react-avatar';
import { SlLike } from "react-icons/sl";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";

import { SlDislike } from "react-icons/sl";
import { FaShare } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import axios from "axios"
import "../Watch/watch.scoped.css"
import { Api_key, youtube_api_url } from '../../constant/AppConstant';
import CommentsBox from '../../Components/CommentsBox/CommentsBox';
import VideosCart from '../../Components/VideosCart/VideosCart';

export default function Watch() {
  const [video , setVideo] = useState([]);
  const getData = async ()=>{
    try{
          const res = await axios.get(`${youtube_api_url}`)
          setVideo(res?.data?.items)  

    }catch{
      console.log("eroor");
    }
    
  }
console.log(video)
const [change , setChange] = useState(false)
  const [comments , setCommets] = useState([]);
  const [icon , setIcosn] = useState("");
const [vidDetails , setViddetails] = useState({});
  const [searchParams] = useSearchParams();
 const vidId = searchParams.get('v')

 const  getComments = async ()=>{
  try{
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=${Api_key}&textFormat=plainText&part=snippet&videoId=${vidId}&maxResults=100`)
  setCommets(res?.data?.items);
  
  }
  catch{
console.log("error")
  }

 }
 const getSingle = async ()=>{
  try{
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${vidId}&key=${Api_key}`)
      console.log(vidId)
  setViddetails(res?.data?.items[0]?.snippet)


  
  }catch{
console.log("error")
  }
 }

//  --------------------
const getIcon = async ()=>{
  try{
     const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${vidDetails.channelId}&key=${Api_key}`)
     setIcosn(res?.data?.items[0]?.snippet?.thumbnails?.medium?.url)

  }catch{
    console.log("error")
  }
 
}
// -------------------------------
 useEffect(()=>{
  getSingle()
  getComments()
  getData()
 } , [])

 useEffect(()=>{

  getComments()
  getSingle()
  getData()

 } , [change])

 useEffect(()=>{

    getIcon()
 } 
 
 ,[getSingle])
 

  return (
    <div className='mt-5 py-5 ms-lg-4 ms-2 Top d-flex'>
      <div className="amit2">
        <div className="parentAmit">
      <div className='iframe'>
    <iframe width="1050"
     height="600" 
     src={`https://www.youtube.com/embed/${vidId}?&autoplay=1`} 
     title="YouTube video player"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     allowFullScreen
      ></iframe>
      <h2>{vidDetails.title}</h2>
      </div>
      <div className='parentOfReaction d-flex justify-content-between mt-lg-3 ' >
<div className='d-flex ' >
        <Avatar src={icon} round={'30px'} size={'55px'}/>
    <div className='ms-2'>
      <p className='titleChannel'>{vidDetails.channelTitle}</p>
      <p className=' channelSubs'>{(Math.random()*999).toFixed()+"k  subscribers"} </p>
    </div>
    <div className='buttonOfSub  ms-lg  ms-lg-5 ms-1 '>
        <button className='btn btnSub'>Subscribe</button>
      </div>
      </div>
    
      <div className='reactions d-flex '>
        <div className='likesRe mx-1 d-flex ' >
          <div className="Like">
             <GrLike   size={'30px'} className='mb-0'/>
          </div>
          <div className="Dislike">
                      <GrDislike className='m' size={'30px'}/>

          </div>
         

        </div>
        <div className='share mx-1'>
          <FaShare  className='' size={'30px'} />
        </div>
        <div className='download mx-1'>
          <IoMdDownload  size={'30px'}/>
        </div>
        <div className='more mx-1'>
<IoIosMore  size={'30px'}/>
        </div>


      </div>
      </div>
      </div>
      <div className="comment-box">
         <CommentsBox />
      </div>
     
      </div>
      <div className='d-flex flex-column amit3 ' >
      {
        video.map((item)=>{
          
          return(
             
            <Link  to={`/watch?v=${item.id}`} className='col-lg-3   Link w-75 ms-auto me-auto mb-4' onClick={()=> setChange(!change)}>
         <VideosCart  viditem={item} key={item.id}/>
    </Link>
          )
        })
      }
      </div>
  
    </div>
  )
}

