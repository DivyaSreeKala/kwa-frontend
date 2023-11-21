import React from 'react'
import './Complaint.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'
function ComplaintEdit() {
  const navigate=useNavigate()
  const UpdateContent=()=>{
      alert("updated")
  }
  const Close=()=>{
      navigate('/complaint-details')
  }
  return (
    <div className='modal-container' >
      <div className='modal'>
      <h3 style={{color:"blue"}}>Edit Complaint</h3>
      <form action='#'>
        <div className='form-inside'>
        First Name<input type='text'/><br/>
        Last Name<input type='text'/><br/>
        Address<textarea/><br/>
        Complaint<input type='text'/><br/>
        Consumer ID<input type='text'/><br/>
        Consumer No.<input type='text'/><br/>
        Mobile Number<input type='text'/><br/>
        Attachment<input type='file'/><br/>
        Current Progress<input type='text'/><br/>
        Remarks<input type='text'/><br/>
        <button className='calculate' onClick={UpdateContent}>Save</button>
        <button style={{backgroundColor:'green'}} className='calculate' onClick={Close}>Close</button>
        </div>
      </form>
      </div>
      </div>
  )
}

export default ComplaintEdit