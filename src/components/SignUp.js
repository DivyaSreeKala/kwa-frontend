import React, { useState } from 'react'
import './Login.css'
import Login from './Login'
import  Axios  from 'axios'
import { api_route } from '../constants'
import { ToastContainer, toast } from 'react-toastify';
function SignUp(props) {
    const [values,setValues]=useState({
        name:"",
        role:"",
        email:"",
        password:""
    })
    const [errors,setErrors]=useState({})
    const isValidEmail = (email) => {
      // Basic email validation, replace with a more robust solution if needed
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const onInputChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})

        if (e.target.name==='name'){
          if (e.target.value.trim() === '') {
            setErrors({
            ...errors , name : 'Name is required'
          })
          } else if (e.target.value.length < 3) {
            setErrors({
              ...errors , name : 'Invalid name'
            })
          }
          else{
            setErrors({
              ...errors , name : ''
            })
          }
        }
        if (e.target.name==='email'){
          if (e.target.value.trim() === '') {
            setErrors({
            ...errors , email : 'Email is required'
          })
          } else if (!isValidEmail(e.target.value)) {
            setErrors({
              ...errors , email : 'Invalid email format'
            })
          }
          else{
            setErrors({
              ...errors , email : ''
            })
          }
        }
        if (e.target.name==='role'){
          if (e.target.value.trim() === '') {
            setErrors({
            ...errors , role : 'Role is required'
          })
          } 
          else{
            setErrors({
              ...errors , role : ''
            })
          }
        }
        if (e.target.name==='password') {
          if (e.target.value.trim()==='') {
            setErrors({
              ...errors , password : 'Password is required'
            })
          } else if (e.target.value.length < 8) {
            setErrors({
              ...errors , password : 'Password must be at least 8 characters long'
            })
          }
          else{
            setErrors({
              ...errors , password : ''
            })
          }
      }
    }

    const onSignup=(e)=>{
        e.preventDefault()
        console.log(values)
        if(ValidateForm()){
        Axios.post(api_route + "/createAdmin",values,
        {
          withCredentials: true,
        }
        )
         .then((res)=>{
        //setValues(res.data)
          console.log('form submitted')
          notify()
          console.log(res.data)
        })
        .catch((error)=>{
          console.log(error)
          setErrors({message:'Invalid Credentials'})
        })
    }
  }
  const notify = () => toast("Wow so easy!");
    //for select
    const [selectedOption, setSelectedOption] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
  
    const options = ['admin', 'section-admin'];
  
    const ValidateForm = () => {
      let formIsValid = true;
      const newErrors = {};
  
      if (!values.name.trim()) {
        formIsValid = false;
        newErrors.name = 'Name is required';
      }
      // Check if email is empty
      if (!values.email.trim()) {
        formIsValid = false;
        newErrors.email = 'Email is required';
      }
      if (!values.role.trim()) {
        formIsValid = false;
        newErrors.role = 'Role is required';
      }
      // Check if password is empty
      if (!values.password.trim()) {
        formIsValid = false;
        newErrors.password = 'Password is required';
      }
  
      setErrors({ ...errors, ...newErrors });
      return formIsValid;
    };
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
                {errors.message && <p className='error-message'>{errors.message}</p>}
                <div className="infield">
                    <input type="text" className='input1' placeholder="Name" name='name' onChange={onInputChange}/>
                    <label className='label1'></label>
                </div>
                {errors.name && <p className='error-message'>{errors.name}</p>}
                <div className="infield">
                    <input type="email" className='input1' placeholder="Email" name="email" onChange={onInputChange}/>
                    <label className='label1'></label>
                </div>
                {errors.email && <p className='error-message'>{errors.email}</p>}
                <div className="infield">
                    <input type="password" className='input1' placeholder="Password" name='password' onChange={onInputChange}/>
                    <label className='label1'></label>
                </div>
                {errors.password && <p className='error-message'>{errors.password}</p>}
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
                 {errors.role && <p className='error-message'>{errors.role}</p>}
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