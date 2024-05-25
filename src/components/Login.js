import React, { useEffect, useState } from 'react'
import './Login.css'
import SignUp from './SignUp'
import  Axios  from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { api_route } from '../constants'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(props) {
    const [values,setValues]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()
    const [errors, setErrors] = useState({});
    const [invaliddata,setInvalidData]=useState(false)

    const isValidEmail = (email) => {
      // Basic email validation, replace with a more robust solution if needed
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const onInputChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
        //const validationErrors = validateForm(values);

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
     const ValidateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // Check if email is empty
    if (!values.email.trim()) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    }

    // Check if password is empty
    if (!values.password.trim()) {
      formIsValid = false;
      newErrors.password = 'Password is required';
    }

    setErrors({ ...errors, ...newErrors });
    return formIsValid;
  };
  

      useEffect(()=>{
        
        Axios.get(api_route + '/currentAdmin',{
          withCredentials: true,
        })
        .then((res)=>{
          console.log(res)
          console.log(res.data.admin.role)
          //setCurrent(res.data.admin.role)
        })
        .catch((error)=>{
          console.log(error)
        })
      },[]);

    const onLogin=(e)=>{
        e.preventDefault()
        console.log(values)
       
       if (ValidateForm()) {
          
        Axios.post( api_route + "/loginAdmin",values
        , {
            withCredentials: true, // Enable sending and receiving cookies
          })
    .then((res)=>{
     
      props.setCurrent(res.data.user.role)
      
      //console.log(document.cookie)
      //const tokenCookie = document.cookie;
       // Access the 'token' cookie using document.cookie
       //const tokenCookie = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
      const tokenCookie=res.headers['Set-Cookie']
      //const token = res.headers['set-cookie'][0].split(';')[0].split('=')[1];
      //console.log( document.cookie.split('; '));
      
    // Store the token in a storage mechanism of your choice (e.g., localStorage or sessionStorage)
   // localStorage.setItem('token', 1234);

   console.log('Form submitted successfully');
   toast.success('Logged in successfully!', {
      position: 'top-right',
      autoClose: 3000, // Set the duration for which the toast will be displayed
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  // alert("Logged In")
    })
    .catch((error)=>{
      console.log(error)
      setErrors({message:'Invalid Credentials'})
     
    })
        } else {
          // Set validation errors to display to the user
          //setErrors(validationErrors);
          console.log('Invalid');
          
        }

    }

  return (
    <div>
        {props.toggle ? 
         <div className="container" id="container">
        <div className="form-container sign-up-container">
            
        </div>

        <div className="form-container sign-in-container">
            <form action="#" className='form-content'>
                <h1 className='heading'>Sign in</h1>
                {errors.message && <p className='error-message'>{errors.message}</p>}
                <div class="infield">
                    <input className='input1' type="email" placeholder="Email" name='email' value={values.email} onChange={onInputChange}/>
                    <label className='label1'></label>
                  
                </div>
                    {errors.email && <p className='error-message'>{errors.email}</p>}
                <div className="infield">
                    <input type="password" className='input1' placeholder="Password" name='password' value={values.password} onChange={onInputChange}/>
                    <label className='label1'></label>
                </div>
                    {errors.password && <p className='error-message'>{errors.password}</p>}
              
                <button className='button1' onClick={onLogin}>Sign In</button>
            </form>
        </div>
        <div className="overlay-container" id="overlayCon">
            <div className="overlay">
                
                <div className="overlay-panel overlay-right">
                    <h1 className='heading'>Hello, Friend!</h1>
                    <p className='para1'>Enter your personal details and start your journey</p>
                    
                </div>
            </div>
            <button id="overlayBtn" className='button1' onClick={props.onToggle}>
                Register</button>
        </div>
    </div>

        : <SignUp toggle={props.toggle} ontoggle={props.onToggle}/>}
    </div>
  )
}

export default Login