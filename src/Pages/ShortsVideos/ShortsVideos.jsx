import React, { useEffect, useState } from 'react'
import "./ShortsVideos.scoped.css"
import { youtube_api_url } from '../../constant/AppConstant';
import axios from 'axios';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function Shorts() {
    const [id , setId] = useState(0)
   

    const [videos , setVideos] = useState([]);
    const getData = async ()=>{
        try{
              const res = await axios.get(`${youtube_api_url}`)
              setVideos(res.data.items)  
        }catch{
          console.log("eroor");
        }
        
      }
      useEffect(()=>{
        setId((Math.random()*50).toFixed(0));
getData();
      } , []) 
let reels = [];
videos.map((item)=>{
    reels.push(item.id)

})
function changeIndex(){
     setId((Math.random()*50).toFixed(0));


}


  return (

    <>
    <div className="containerAll">

        
        <div className="videoConatiner">
        <iframe width="450"
     height="800" 
     src={`https://www.youtube.com/embed/${reels[id]}?&autoplay=1`} 
     title="YouTube video player"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
     
      >


      </iframe>
      <Link  to="/"className='close' >
      <IoClose  size={'50px'}/>
      </Link>
     
      <div className='controll'>
      
      <GrFormPrevious size={'50px'} className='bttn' onClick={()=>changeIndex()}/>
            <MdNavigateNext size={'50px'} className='bttn'  onClick={()=>changeIndex()}/>

        </div>
        </div>
    </div>
      
    </>
  )
}