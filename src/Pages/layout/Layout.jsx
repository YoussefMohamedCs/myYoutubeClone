import React from 'react'
import Header from '../../Components/Headrer/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Home from '../Home/Home'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <>
    <Header />
   
    
<div className="d-flex">
  
    
   <Sidebar /> 
  <Outlet></Outlet>

</div>
    </>
    
  )
}
