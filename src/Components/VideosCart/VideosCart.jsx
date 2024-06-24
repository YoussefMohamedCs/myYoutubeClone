import { RxAvatar } from "react-icons/rx";
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar';
import "../VideosCart/VideosCart.scoped.css"
import { Api_key } from "../../constant/AppConstant";
import axios from "axios";



export default function VideosCart({viditem}) {
const [ytIcon , setIcon] = useState("")

  const getIcon = async ()=>{
    try{
       const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${viditem.snippet.channelId}&key=${Api_key}`)
    setIcon(res?.data?.items[0]?.snippet?.thumbnails?.medium?.url)
    console.log(res)
    }catch{
      console.log("error")
    }
   
  }
  
useEffect(()=>{
  getIcon();
}  ,[])



  return (
    
   <div className="cart">
    <div className="cart-img w-100">
        <img src={viditem.snippet.thumbnails.medium.url}  width={"100%"} height={`100%`}  alt="" />
    </div>
    <div className="cart-body  mt-2  d-flex ">
        <div className="avatar " >
        <Avatar   src={ytIcon} round={'20px'} size={'40px'}/>
        </div>
        <div className="title px-2">
            <h3>{viditem.snippet.title}</h3>
            <p className="nameChanal">{viditem.snippet.channelTitle}</p>
        </div>
        
    </div>
   </div>
   
  )
}
