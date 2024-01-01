import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaFilePdf } from "react-icons/fa6";
import Axios from 'axios'
import { api_route } from '../constants';
function ComplaintView() {
    const navigate=useNavigate()
    const {id}=useParams()
    const [values,setValues]=useState({})
    
    useEffect(()=>{
      Axios.get(api_route + "/getComplaintById/"+id,{

    })
    .then((res)=>{
      setValues(res.data.complaint)
      
      console.log(res.data)
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
      <div className='label-1'><label >Complaint ID:</label></div>
        <label className='label-2'>{values.id}</label>
        </div>
      <div className="data-field">
      <div className='label-1'><label >Consumer ID:</label></div>
        <label className='label-2'>{values.consumer_id}</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Consumer No.:</label></div>
        <label className='label-2'>{values.consumer_number}</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>First Name:</label></div>
        <label className='label-2'>{values.first_name}</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Last Name:</label></div>
        <label className='label-2'>{values.last_name}</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Address:</label></div>
        <label className='label-2'>{values.address}</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Mobile Number:</label></div>
        <label className='label-2'>{values.mobile_number}</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Complaint:</label></div>
        <label className='label-2'>{values.complaint}</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Attachment:</label></div>
        <a href={values.attachment_path} target='_blank'><FaFilePdf  style={{width:'1.6rem',height:'1.6rem'}} /></a>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Current Status:</label></div>
        <label className='label-2'>{values.current_progress}</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Remarks:</label></div>
        <label className='label-2'>{values.remarks}</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Created At:</label></div>
        <label className='label-2'>{values.createdAt}</label>
        </div>
        <div className="data-field">
        <div className='label-1'><label>Updated At:</label></div>
        <label className='label-2'>{values.updatedAt}</label>
        </div>
        <button style={{backgroundColor:'green'}} className='calculate' onClick={View}>Close</button>
        
      </div>
      </div>
  )
}

export default ComplaintView