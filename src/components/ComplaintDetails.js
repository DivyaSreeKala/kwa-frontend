import React, { useEffect, useState } from 'react'
import "../App.css"
import Axios from 'axios'

import {BsFillTrashFill,BsFillPencilFill} from 'react-icons/bs'

import {useNavigate} from 'react-router-dom'
import { api_route } from '../constants'
function ComplaintDetails() {
  //const [edit,setEdit]=useState(false);
  const [values,setValues]=useState([]);
 
 // const [cid,setCid]=useState('1234')
  //const [name,setName]=useState('nhcj')
  //const [complaint,setComplaint]=useState('')
  //const [status,setStatus]=useState('')
  //const [created,setCreated]=useState('')
 // const [updated,setUpdated]=useState('')
  
  const [deleterow,setDeleteRow]=useState(0)
  const navigate=useNavigate()
  
  const viewContent=(id)=>{
      navigate('/complaint-details/view/'+id)
      
  }
  const editContent=(id)=>{
     
      navigate('/complaint-details/edit/'+id)
  }
  const deleteSelection=(id)=>{
    console.log(id)
    if(window.confirm("do you want to delete it?")){
    
      Axios.delete('http://localhost:3002/api/v2/deleteComplaint/'+id,{

    })
    .then((res)=>{
      console.log(res)
      alert( res.data.message)
      setDeleteRow(id)
      //setValues({...values})
      //window. location.reload(false);
    })
    .catch((error)=>{
      console.log(error)
    })
    

  }
  }

 
  useEffect(()=>{
    Axios.get('http://localhost:3002/api/v2/getAllComplaints',{

    })
    .then((res)=>{
      setValues(res.data.complaints)
     
      console.log(values)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[deleterow]);//dependency values?? 
  return (
    <div className=" complaint-home" >
     
      <table className="styled-table" >
        <thead>
         
          <tr>
          <th>Consumer ID</th>
          <th>First Name</th>
          <th>Complaint</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
         {
            values.map((item)=>{
                
             return <tr key={item.id}>
              
              <td>{item.consumer_id}</td>
              <td>{item.first_name}</td>
              <td>{item.complaint}</td>
              
              <td>{item.current_progress}</td>
              <td>{item.createdAt}</td>
              <td>{item.updatedAt}</td>
              <td>
              <span className='control-btns'>
              <button style={{backgroundColor:'blue',cursor:'pointer'}} onClick={()=>viewContent(item.id)}>View</button>
              <button style={{backgroundColor:"green",cursor:'pointer'}} onClick={()=>editContent(item.id)} >Edit</button>
              <BsFillTrashFill style={{color:"#cc0000",cursor:'pointer'}} onClick={()=>deleteSelection(item.id)}/>
               </span>
               </td>
              </tr>
              
            })
          }
          
        </tbody>
      </table>
      
    </div>
  );
}

export default ComplaintDetails;