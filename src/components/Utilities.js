import React, { useState } from 'react'
import '../App.css'
import './Complaint.css'
import "./Modal.css"
import  Axios  from 'axios'
import { api_route } from '../constants'

function Utilities() {

  //utility 1 or utility 2
  const [utility,setUtility]=useState(false)
  
  //modal appearance
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  //outputs
  const [utility1,setUtility1]=useState({
    leakage:'',
    no_of_months:'',
    leakage_benefit:''
  })
  const [utility2,setUtility2]=useState({
    tender_fee:'',
    emd:'',
    performance_gaurantee:'',
    additional_performance_gaurantee:'',
    stamp_paper:''
  })
//inputs 
  const [inputs1,setInputs1]=useState({

    previous_reading:'',
    current_reading:'',
    no_of_months:''
  })


  const [inputs2,setInputs2]=useState({

    tendered_pac: '',
    quoted_amount: ''
  })
//utility 1
  const onClickModal1 = (e) => {
    e.preventDefault()
    console.log(inputs1)

    Axios.post(api_route + '/leakageBenefits',inputs1
    ,{headers:{
    'Content-Type':'application/json'} })
  .then((res)=>{
    //setValues(res.data.complaint)
    setUtility1(res.data)
    console.log(res)
    setModal1(!modal1);
  })
  .catch((error)=>{
    console.log(error)
  })
  
    
  };
//utility 2
  const onClickModal2 = (e) => {
    e.preventDefault()
    //setInputs2(parseFloat(inputs2))
    //console.log(parseFloat(inputs2)
<<<<<<< HEAD
    Axios.post("http://localhost:3002/api/v2/feeDetails",inputs2,{
      withCredentials: true,
    },
=======
    Axios.post(api_route + "/feeDetails",inputs2,
>>>>>>> 3b7ab2676bf7add46e3fd9cb02035019a2078612
    {headers:{
      'Content-Type':'application/json'} })
  .then((res)=>{
    //setValues(res.data.complaint)
    setUtility2(res.data)
    setModal2(!modal2)
    console.log(res.data)
  })
  .catch((error)=>{
    console.log(error)
  })

    
  };

  const onClose1=()=>{
    setModal1(!modal1);
  }
  const onClose2=()=>{
    setModal2(!modal2);
  }

  const onInputChange1=(e)=>{
      setInputs1({...inputs1,[e.target.name]:e.target.value === '' ? 0 : parseInt(e.target.value, 10)})
  }

  const onInputChange2=(e)=>{
    const value = e.target.value;
    
    if (/^\d*\.?\d*$/.test(value)) {
    setInputs2({...inputs2,[e.target.name]:e.target.value})}
    }

  if(modal1 || modal2) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <div>
      
    <div className='utilities'>
      {utility ? 
      <div className='utility1'>
      <h3 style={{color:'blue'}}>Leakage Benefits Calculation</h3>
        <form className="add" action="#">
          <div className='innerbox'>
          <label className="form-label">Previous Reading</label>
            <input className='type-1' type='text' value={inputs1.previous_reading} name='previous_reading' onChange={onInputChange1} required /><br/>
            <label className="form-label">Current Reading</label> 
            <input className='type-1' type='text' value={inputs1.current_reading} name='current_reading' onChange={onInputChange1} required/><br/>
            <label className="form-label">Months</label>
            <input className='type-1' type='text' value={inputs1.no_of_months} name='no_of_months' onChange={onInputChange1} required/><br/>
            <button className='calculate' onClick={onClickModal1}>Submit</button>
          </div>
        </form>
        </div>

        
        :
        <div className='utility2'>
        <h3 style={{color:'blue'}}>Fee Details Calculation</h3>
        <form className='add' action="#">
          <div className='innerbox' >
        <label className="form-label">Tendered Pac</label>
            <input className='type-1' type='text' value={inputs2.tendered_pac} name='tendered_pac' onChange={onInputChange2} required/><br/>
             <label className="form-label">Quoted Amount</label>
            <input className='type-1' type='text' value={inputs2.quoted_amount} name='quoted_amount' onChange={onInputChange2} required/><br/>
            <button className='calculate' onClick={onClickModal2}>Submit</button>
            </div>
        </form>
        </div>
          }
        </div>
        {modal1 && (
          
        <div className="modall">
          <div onClick={onClickModal1} className="overlays"></div>
          <div className="modal-content">
            <h2>Leakage Benefits</h2>
            <label className="form-label">Previous Reading : </label>
               <label style={{color:'blue'}}> {inputs1.previous_reading}</label><br/>
               <label className="form-label">Current Reading : </label>
               <label style={{color:'blue'}}> {inputs1.current_reading}</label><br/>
            <label className="form-label">Leakage : </label>
               <label style={{color:'blue'}}> {utility1.leakage}</label><br/>
                <label className="form-label">Leakage Benefits : </label>
                <label style={{color:'blue'}}>{utility1.leakage_benefit}</label><br/>
                <label className="form-label">Months : </label>
                <label  style={{color:'blue'}}>{utility1.no_of_months}</label><br/>
            <button className="calculate" style={{backgroundColor:'red'}} onClick={onClose1}>
              Close
            </button>
          </div>
        </div>
       
      )}

{modal2 && (
        
        <div className="modall">
          <div onClick={onClickModal2} className="overlays"></div>
          <div className="modal-content">
            <h2>Fee Details Calculaion</h2>
              <label className="form-label">Tendered Pac : </label>
               <label style={{color:'blue'}}> {inputs2.tendered_pac}</label><br/>
              <label className="form-label">Quoted Amount : </label>
               <label style={{color:'blue'}}> {inputs2.quoted_amount}</label><br/>
              <label className="form-label">Tender Fee : </label>
               <label style={{color:'blue'}}> {utility2.tender_fee}</label><br/>
              <label className="form-label">EMD : </label>
               <label style={{color:'blue'}}> {utility2.emd}</label><br/>
              <label className="form-label">Performance Guarantee : </label>
               <label style={{color:'blue'}}> {utility2.performance_gaurantee}</label><br/>
              <label className="form-label">Additional Performance Guarantee : </label>
               <label style={{color:'blue'}}> {utility2.additional_performance_gaurantee}</label><br/>
              <label className="form-label">Stamp Paper : </label>
               <label style={{color:'blue'}}> {utility2.stamp_paper}</label><br/>
            <button className="calculate" style={{backgroundColor:'red'}} onClick={onClose2}>
              Close
            </button>
          </div>
        </div>
      
      )}
        <div className='switch-div'>
        { utility ? <button className='switch-a' onClick={()=>{setUtility(!utility)}}>Utility2</button>
            :
        <button className='switch-a' onClick={()=>{setUtility(!utility)}}>Utility1</button>}
        </div>
    </div>
  )
}

export default Utilities