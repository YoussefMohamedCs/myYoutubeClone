import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { cahngeOpen } from '../../rtk/Slices/Open-slice';
import {useSelector , useDispatch} from "react-redux"
import { Link } from 'react-router-dom';
import './Header.scoped.css'
import { addCategory } from '../../rtk/Slices/Video';
export default function Header() {
const state = useSelector(state=>state.open)
const category = useSelector((state)=> state.videoList.category)
const [cat , setCat ] = useState("");

const cahngeCat = ()=>{
  dispatch(addCategory(cat));

  setCat("")
}
const setSecondCat = (e)=>{
  if(e.keyCode == 13){
    dispatch(addCategory(cat));
    setCat("")
  }
}
const dispatch = useDispatch();
  return (
    <>
      <div className='d-flex justify-content-between py-2 Header'>
        <div className='icon w-25  px-2  d-flex'>
            <GiHamburgerMenu size={'35px'} onClick={()=> dispatch(cahngeOpen())} className='hamburger'/>
            <Link to={'/'}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"  className={'ms-2'} width={'130px'}  alt="yt-image" onClick={()=> cahngeCat()} />
            </Link>
            
        </div>
        {/* just comment*/}
        <div className='searchYt w-50 d-flex justify-contnt-center  align-items-center'>
<input type="text" value={cat} onChange={(e)=>setCat(e.target.value) } onKeyUp={(e)=> setSecondCat(e)} placeholder='search'  className='w-50 px-3 '/>
<CiSearch size={'46px'} className='searchIcon px-2' onClick={()=> cahngeCat() }  />
        </div>
        <div className='profInfo d-flex justify-content-between align-items-center   px-2' > 
          <SiYoutubeshorts    size={'40px'}/>
<IoIosNotificationsOutline size={'40px'} />
<RxAvatar size={'40px'}/> 
        </div>

      </div>
    </>
  )
}
