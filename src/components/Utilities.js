import React, { useState } from 'react'
import '../App.css'
import './Complaint.css'

function Utilities() {
  const [utility,setUtility]=useState(false)
  return (
    <div>
    <div className='utilities'>
      {utility ? 
      <div className='utility1'>
      <h3>Utility1</h3>
        <form className="add" action="#">
          <div className='innerbox'>
          <label className="form-label">Previous Reading</label>
            <input className='type-1' type='number'/><br/>
            <label className="form-label">Current Reading</label> 
            <input className='type-1' type='number'/><br/>
            <label className="form-label">Months</label>
            <input className='type-1' type='number'/><br/>
            <button className='calculate'>Submit</button>
          </div>
        </form>
        </div>
        :
        <div className='utility2'>
        <h3>Utility2</h3>
        <form className='add' action="#">
          <div className='innerbox' >
        <label className="form-label">Tendered Pac</label>
            <input className='type-1' type='number'/><br/>
             <label className="form-label">Quoted Amount</label>
            <input className='type-1' type='number'/><br/>
            <button className='calculate'>Submit</button>
            </div>
        </form>
        </div>
          }
        </div>
        <div className='switch-div'>
        { utility ? <a className='switch-a' onClick={()=>{setUtility(!utility)}}>Utility2</a>
            :
        <a className='switch-a' onClick={()=>{setUtility(!utility)}}>Utility1</a>}
        </div>
    </div>
  )
}

export default Utilities