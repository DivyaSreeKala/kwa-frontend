import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {IconContext} from 'react-icons/lib'
import './Sidebar.css'
import  logo from './kwalogo.webp'
import { SidebarData } from './SidebarData'
import Logout from './Logout'

function Sidebar() {
    const [Sidebar,setSidebar]=useState(false)

    const showSidebar = ()=>{
      setSidebar(!Sidebar)
    }
  return (
    <div>
      <IconContext.Provider value={{color:"#fff"}}>
        <div className='nav'>
        { Sidebar ? <AiOutlineClose className='aioutlineclose' onClick={showSidebar}/> 
                  : <FaBars className='favbars' onClick={showSidebar}/> }
        <a href="https://kwa.kerala.gov.in/en/" target='_blank'><img className='logo' src={logo} alt='logi'/></a>
        <h1 className='h11' style={{
                     color: "#fff" }}>Kerala Water Authority</h1>
              
              <div className='logout'><Logout/></div>
        </div>
        {Sidebar ? <div className='sidebar'>
          <h2 style={{marginLeft :"1.4rem"}}>Welcome</h2>
        <div className='sidebar-link'>
               {SidebarData.map((item,index)=>{
                 return <div>
                    <Link to={item.path} className='sidebar-item' >
                    {item.title}
                    </Link>
                  </div>
               })}
        </div>
        </div> : null }
        </IconContext.Provider>
    </div>
  )
}

export default Sidebar