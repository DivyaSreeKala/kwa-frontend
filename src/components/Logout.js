import React from 'react'
import './Complaint.css'
import './Sidebar.css'
import  Axios  from 'axios'
import { useNavigate } from 'react-router-dom'
function Logout() {
    const navigate=useNavigate()
    const onLogout=(e)=>{
      e.preventDefault()
      Axios.get("http://localhost:3002/api/v2/logoutAdmin",
        {
          withCredentials: true,
        }
        )
         .then((res)=>{
        //setValues(res.data)
          navigate('/')
         console.log(res.data)
         })
        .catch((error)=>{
         console.log(error)
        })
    }
  return (
    <div>

        <button style={{backgroundColor:'red'}} className='calculate' onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Logout