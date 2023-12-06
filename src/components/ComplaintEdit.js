import React, { useEffect, useState } from 'react'
import './Complaint.css'
import '../App.css'
import { useNavigate, useParams } from 'react-router-dom'
import { FaFilePdf } from "react-icons/fa6";
import  Axios  from 'axios';
function ComplaintEdit() {
  const navigate=useNavigate()
  const {id}=useParams() 
  const [values,setValues]=useState({})
  useEffect(()=>{
    Axios.get("http://localhost:3002/api/v2/getComplaintById/"+id,{

  })
  .then((res)=>{
    setValues(res.data.complaint)
    
    console.log(res.data)
  })
  .catch((error)=>{
    console.log(error)
  })
  },[])
  const UpdateContent=()=>{
      alert("updated")
  }
  const Close=()=>{
      navigate('/complaint-details')
  }
  return (
    <div className='outer-box' >
      <div className='registration'>
      <h3 style={{color:"blue"}}>Edit Complaint</h3>
      <form action='#'>
        <div className='form-inside'>
        <div className='form-inside' >
          <div className="input-field">
        <label>Consumer ID</label>
        <input className='type-1' type='text' value={values.consumer_id}/><br/>
        </div>
        <div className="input-field">
        <label>Consumer No.</label>
        <input className='type-1' type='text' value={values.consumer_number}/><br/>
        </div>
        <div className="input-field">
        <label>First Name</label>
        <input className='type-1' type='text' value={values.first_name}/><br/>
        </div>
        <div className="input-field">
        <label>Last Name</label>
        <input className='type-1' type='text' value={values.last_name}/><br/>
        </div>
        <div className="input-field">
        <label>Address</label>
        <textarea className='address' value={values.address}/><br/>
        </div>
        <div className="input-field">
        <label>Mobile Number</label>
        <input className='type-1' type='text' value={values.mobile_number}/><br/>
        </div>
        <div className="input-field">
        <label>Complaint</label>
        <input className='type-1' type='text' value={values.complaint}/><br/>
        </div>
        <div className="input-field">
        <label>Attachment</label>
        <input className='file-select' type='file' 
         />
          <a href={values.attachment_path} target='_blank'><FaFilePdf  style={{width:'1.6rem',height:'1.6rem'}} /></a>
        <br/>
        </div>
        <div className="input-field">
        <label>Current Status</label>
        <input className='type-1' type='text' value={values.current_progress}/><br/>
        </div>
        <div className="input-field">
        <label>Remarks</label>
        <input className='type-1' type='text' value={values.remarks}/><br/>
        </div>
        </div>
        <div className='save-close'>
        <button className='calculate' onClick={UpdateContent}>Save</button>
        <button style={{backgroundColor:'green'}} className='calculate' onClick={Close}>Close</button>
        </div>
        </div>
      </form>
      </div>
      </div>
  )
}

export default ComplaintEdit