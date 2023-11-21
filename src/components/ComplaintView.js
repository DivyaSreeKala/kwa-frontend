import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'
function ComplaintView() {
    const navigate=useNavigate()
    const {id}=useParams()
    const [values,setValues]=useState({})
    console.log(id)
    useEffect(()=>{
      Axios.get("http://localhost:3002/api/v2/getComplaintById/"+id,{

    })
    .then((res)=>{
      setValues(res.data.complaint)
      
      console.log(values)
    })
    .catch((error)=>{
      console.log(error)
    })
    },[])
   const View=()=>{
        navigate('/complaint-details')
    }
  return (
    <div className='modal-container' >
      <div className='modal'>
      <h3 style={{color:"blue"}}>View Complaint Details</h3>
      
      <div className="data-field">
      <div className='label-1'><label >Consumer ID:</label></div>
        <label className='label-2'>{values.first_name}</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Consumer No.:</label></div>
        <label className='label-2'>hi</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>First Name:</label></div>
        <label className='label-2'>hi</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Last Name:</label></div>
        <label className='label-2'>hi</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Address:</label></div>
        <label className='label-2'>hi</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Mobile Number:</label></div>
        <label className='label-2'>hi</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Complaint:</label></div>
        <label className='label-2'>hi</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Attachment:</label></div>
        <label className='label-2'>hi</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Current Status:</label></div>
        <label className='label-2'>hi</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Remarks:</label></div>
        <label className='label-2'>hi</label>
        </div>
        <button style={{backgroundColor:'green'}} className='calculate' onClick={View}>Close</button>
        
      </div>
      </div>
  )
}

export default ComplaintView