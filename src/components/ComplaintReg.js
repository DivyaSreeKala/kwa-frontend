import React from 'react'
import './Complaint.css'
import '../App.css'
function ComplaintReg() {
  return (
      <div className='outer-box'>
    <div className='registration'>
      <header>Complaint Registraton</header>
       <form  action='#'>
        <div className='form-inside' >
          <div className="input-field">
        <label>Consumer ID</label>
        <input className='type-1' type='text'/><br/>
        </div>
        <div className="input-field">
        <label>Consumer No.</label>
        <input className='type-1' type='text'/><br/>
        </div>
        <div className="input-field">
        <label>First Name</label>
        <input className='type-1' type='text'/><br/>
        </div>
        <div className="input-field">
        <label>Last Name</label>
        <input className='type-1' type='text'/><br/>
        </div>
        <div className="input-field">
        <label>Address</label>
        <textarea className='address'/><br/>
        </div>
        <div className="input-field">
        <label>Mobile Number</label>
        <input className='type-1' type='text'/><br/>
        </div>
        <div className="input-field">
        <label>Complaint</label>
        <input className='type-1' type='text'/><br/>
        </div>
        <div className="input-field">
        <label>Attachment</label>
        <input className='file-select' type='file'/><br/>
        </div>
        <div className="input-field">
        <label>Current Status</label>
        <input className='type-1' type='text'/><br/>
        </div>
        <div className="input-field">
        <label>Remarks</label>
        <input className='type-1' type='text'/><br/>
        </div>
        </div>
        <div className='register'>
        <button className='calculate'>Register</button>
        </div>
        </form>
        </div>
    </div>
  )
}

export default ComplaintReg