import React, { useEffect, useState } from 'react'
import './Complaint.css'
import '../App.css'
import  Axios  from 'axios'
function ComplaintReg() {
  const [inputs,setInputs]=useState({
    consumer_id:"",
    consumer_number:"",
    first_name:"",
    last_name:"",
    address:"",
    mobile_number:"",
    complaint:"",
    //attachment_path:"",
    attachment:null,
    current_progress:"",
    remarks:""
  })
 
  //let formData1=new FormData()
  const onRegister=(e)=>{
    e.preventDefault()
    //const form=document.getElementById("myForm")
    //console.log(form)
    //setInputs({...inputs,attachment_path:inputs.file.name})
    console.log(inputs)
    const formData2=new FormData()
    console.log('11111111111111111111')
    
    for (let key in inputs) {
      if (key === 'attachment') {
        // Handle file separately
        if (inputs[key] instanceof File) {
          formData2.append(key, inputs[key], inputs[key].name);
          console.log(formData2.get(key))
        }
      } else {
        // For non-file fields, append as usual
        formData2.append(key, inputs[key]);
      }
    }

    console.log(inputs)
    for (const [key, value] of formData2.entries()) {
      console.log(`${key}: ${value}`);
      console.log('hii')
    }
    
    
  Axios.post('http://localhost:3002/api/v2/createComplaint',formData2
    ,{headers:{
      'Content-Type':'multipart/form-data'} }
    ).then((response)=>{
      console.log(response)

    })
  }
     
  const onInputChange=(e)=>{
    
    setInputs({...inputs,[e.target.name]:e.target.value})
    
    
  }

  const onFileChange=(e)=>{
    const attachment = e.target.files[0];
    setInputs({...inputs, attachment });
    
  }
  

  

  return (
      <div className='outer-box'>
    <div className='registration'>
      <header>Complaint Registraton</header>
       <form  action='#' id='myForm' encType='multipart/form-data'>
        <div className='form-inside' >
          <div className="input-field">
        <label>Consumer ID</label>
        <input className='type-1' type='text' name='consumer_id' required onError={"enter valid"} value={inputs.consumer_id} onChange={onInputChange} /><br/>
        </div>
        <div className="input-field"> 
        <label>Consumer No.</label>
        <input className='type-1' type='text' name='consumer_number' value={inputs.consumer_number} onChange={onInputChange} /><br/>
        </div>
        <div className="input-field">
        <label>First Name</label>
        <input className='type-1' type='text' name='first_name' value={inputs.first_name} onChange={onInputChange} /><br/>
        </div>
        <div className="input-field">
        <label>Last Name</label>
        <input className='type-1' type='text' name='last_name' value={inputs.last_name} onChange={onInputChange} /><br/>
        </div>
        <div className="input-field">
        <label>Address</label>
        <textarea className='address' name='address' value={inputs.address} onChange={onInputChange} /><br/>
        </div>
        <div className="input-field">
        <label>Mobile Number</label>
        <input className='type-1' type='text' name='mobile_number' value={inputs.mobile_number} onChange={onInputChange} /><br/>
        </div>
        <div className="input-field">
        <label>Complaint</label>
        <input className='type-1' type='text' name='complaint' value={inputs.complaint} onChange={onInputChange} /><br/>
        </div>
        <div className="input-field">
        <label>Attachment</label>
        <input className='file-select' type='file' name='attachment' value={inputs.file?.path} onChange={onFileChange} /><br/>
        </div>
        <div className="input-field">
        <label>Current Status</label>
        <input className='type-1' type='text' name='current_progress' value={inputs.current_progress} onChange={onInputChange} /><br/>
        </div>
        <div className="input-field">
        <label>Remarks</label>
        <input className='type-1' type='text' name='remarks' value={inputs.remarks} onChange={onInputChange} /><br/>
        </div>
        </div>
        <div className='register'>
        <button type='button' className='calculate' onClick={onRegister}>Register</button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default ComplaintReg