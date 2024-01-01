import React, { useState } from 'react'
import './Login.css'
import Login from './Login'
import  Axios  from 'axios'
import { api_route } from '../constants'
function SignUp(props) {
    const [values,setValues]=useState({
        name:"",
        role:"",
        email:"",
        password:""
    })
    
    const onInputChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
      }

    const onSignup=(e)=>{
        e.preventDefault()
        console.log(values)
        Axios.post(api_route + "/createAdmin",values,
        {
          withCredentials: true,
        }
        )
         .then((res)=>{
        //setValues(res.data)
      
         console.log(res.data)
         })
        .catch((error)=>{
         console.log(error)
        })
    }

    //for select
    const [selectedOption, setSelectedOption] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
  
    const options = ['admin', 'section-admin'];
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setDropdownVisible(false);
      setValues({...values,role:option})
    };
  return (
    <div>
        {props.toggle ? <Login toggle={props.toggle} onToggle={props.onToggle}/> :
        <div className="container" id="container">
        
        <div className="overlay-container" id="overlayCon">
            <div className="overlay">
                <div className="overlay-panel overlay-right">
                    <h1 className='heading'>Welcome Back!</h1>
                    <p className='para1'>To keep connected please login</p>
                    
                </div>
                
            </div>
            <button id="overlayBtn" className='button1' onClick={props.onToggle}>
                Login</button>
        </div>

        <div className="form-container ">
            <form action="#" className='form-content'>
                <h1 className='heading'>Create Account</h1>
                
                <div className="infield">
                    <input type="text" className='input1' placeholder="Name" name='name' onChange={onInputChange}/>
                    <label className='label1'></label>
                </div>
                <div className="infield">
                    <input type="email" className='input1' placeholder="Email" name="email" onChange={onInputChange}/>
                    <label className='label1'></label>
                </div>
                
                <div className="infield">
                    <input type="password" className='input1' placeholder="Password" name='password' onChange={onInputChange}/>
                    <label className='label1'></label>
                </div>
                <div className="infield">
                <div className="custom-select-container">
      <div className="custom-select" onClick={() => setDropdownVisible(!dropdownVisible)}>
        {selectedOption || 'Select an option'}
        <div className={`dropdown ${dropdownVisible ? 'visible' : ''}`}>
          {options.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option)} >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
                 </div>
                <button onClick={onSignup} className='button1'>Sign Up</button>
            </form>
        </div>
   
     </div>
    }
    </div>
  )
}

export default SignUp