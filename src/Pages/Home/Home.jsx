import React, { useEffect, useState } from 'react'
import VideosCart from '../../Components/VideosCart/VideosCart'
import {useDispatch , useSelector} from "react-redux"
import { getApi } from '../../rtk/Slices/Ytapi'
import axios from 'axios'
import { urll , Api_key } from '../../constant/AppConstant'
import { youtube_api_url } from '../../constant/AppConstant'
import { Link } from "react-router-dom";
import "../Home/Home.scoped.css"
import { addVideo , addCategory } from '../../rtk/Slices/Video'
export default function Home() {
  // const [video , setVideo] = useState([]);
  const {video , category} = useSelector((store)=> store.videoList)
  console.log(video)
const dispatch = useDispatch();
  const getData = async ()=>{
    try{
          const res = await axios.get(`${youtube_api_url}`)
          // setVideo(res.data.items)  
          // console.log(res.data.items)
          dispatch(addVideo(res?.data?.items))
          // console.log('hello')


    }catch{
      console.log("eroor");
    }
    
  }


  const getDateByCategoty = async ()=>{
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${category}&type=video&key=${Api_key}`)
    dispatch(addVideo(res?.data?.items))

  }
  
  useEffect(()=>{
    getData();
  } , [])

  useEffect(()=>{
    getDateByCategoty();
  } , [category])
//   useEffect(()=>{
// dispatch(getApi());
//   } , [])
  // const state = useSelector(state => state.ytA)

  return (
    <>
      <div className=" mt-5 py-5 amit">
        <div className="row">
      {
        video.map((item)=>{
          
          return(
             
            <Link  to={`/watch?v=${ typeof item.id === 'object' ? item.id.videoId : item.id}`} className='col-lg-3 mb-3 Link'>
         <VideosCart  viditem={item} key={item.id}/>
    </Link>
          )
        })
      }
        </div>
        </div>
    </>
  )
}
