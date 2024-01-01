import React, { useEffect, useState } from 'react'
import './Complaint.css'
import '../App.css'
import { useNavigate, useParams } from 'react-router-dom'
import { FaFilePdf } from "react-icons/fa6";
import  Axios  from 'axios';
import { api_route } from '../constants';
function ComplaintEdit() {

  const [inputs,setInputs]=useState({
    consumer_id:"",
    consumer_number:"",
    first_name:"",
    last_name:"",
    address:"",
    mobile_number:"",
    complaint:"",
    attachment:null,
    current_progress:"",
    remarks:""
  })
  const navigate=useNavigate()
  const {id}=useParams() 
  const [values,setValues]=useState({})
  useEffect(()=>{
    Axios.get(api_route+ "/getComplaintById/"+id,{

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

  const onUpdate=(e)=>{
    e.preventDefault()
    console.log(values)
    const formData2=new FormData()
    console.log('11111111111111111111')
    
    for (let key in values) {
      if (key === 'attachment') {
        // Handle file separately
        if (values[key] instanceof File) {
          formData2.append(key, values[key], values[key].name);
          console.log(formData2.get(key))
        }
      } else {
        // For non-file fields, append as usual
        formData2.append(key, values[key]);
      }
    }

    console.log(values)
    for (const [key, value] of formData2.entries()) {
      console.log(`${key}: ${value}`);
      console.log('hii')
    }
    
    
  Axios.put(api_route+ '/updateComplaint/'+id,formData2
  
    ,{headers:{
      'Content-Type':'multipart/form-data'} }
    ).then((response)=>{
      console.log(response)

    })
  }

     
  const onInputChange=(e)=>{
    
    setValues({...values,[e.target.name]:e.target.value})
    
    
  }

  const onFileChange=(e)=>{
    const attachment = e.target.files[0];
    setValues({...values, attachment });
    
  }
  
     

  return (
    <div className='outer-box' >
      <div className='registration'>
      <h3 style={{color:"blue"}}>Edit Complaint</h3>
      <form action='#' id='myForm' encType='multipart/form-data'>
        <div className='form-inside'>
        <div className='form-inside' >
          <div className="input-field">
        <label>Consumer ID</label>
        <input className='type-1' type='text'  name='consumer_id' value={values.consumer_id} onChange={onInputChange} disabled/><br/>
        </div>
        <div className="input-field">
        <label>Consumer No.</label>
        <input className='type-1' type='text' name='consumer_number' value={values.consumer_number} onChange={onInputChange} disabled/><br/>
        </div>
        <div className="input-field">
        <label>First Name</label>
        <input className='type-1' type='text' name='first_name' value={values.first_name} onChange={onInputChange} disabled/><br/>
        </div>
        <div className="input-field">
        <label>Last Name</label>
        <input className='type-1' type='text' name='last_name' value={values.last_name} onChange={onInputChange} disabled/><br/>
        </div>
        <div className="input-field">
        <label>Address</label>
        <textarea className='address' name='address' value={values.address} onChange={onInputChange} disabled/><br/>
        </div>
        <div className="input-field">
        <label>Mobile Number</label>
        <input className='type-1' type='text' name='mobile_number' value={values.mobile_number} onChange={onInputChange} disabled/><br/>
        </div>
        <div className="input-field">
        <label>Complaint</label>
        <input className='type-1' type='text' name='complaint' value={values.complaint} onChange={onInputChange} disabled/><br/>
        </div>
        <div className="input-field">
        <label>Attachment</label>
        <input className='file-select' type='file' name='attachment'  onChange={onFileChange}
         />
          <a href={values.attachment_path} target='_blank'><FaFilePdf  style={{width:'1.6rem',height:'1.6rem'}} /></a>
        <br/>
        </div>
        <div className="input-field">
        <label>Current Status</label>
        <input className='type-1' type='text' name='current_progress' value={values.current_progress} onChange={onInputChange}/><br/>
        </div>
        <div className="input-field">
        <label>Remarks</label>
        <input className='type-1' type='text' name='remarks' value={values.remarks} onChange={onInputChange} disabled/><br/>
        </div>
        </div>
        <div className='save-close'>
        <button className='calculate' onClick={onUpdate}>Save</button>
        <button style={{backgroundColor:'green'}} className='calculate' onClick={Close}>Close</button>
        </div>
        </div>
      </form>
      </div>
      </div>
  )
}

export default ComplaintEdit