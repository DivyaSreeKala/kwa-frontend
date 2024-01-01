import React, { useEffect, useState } from 'react'
import './Login.css'
import SignUp from './SignUp'
import  Axios  from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
function Login(props) {
    const [values,setValues]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()
    const [errors, setErrors] = useState({});
    const onInputChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
      }
     // const [token,setToken]=useState(null)
     
     // const [current,setCurrent]=useState('')
  
      useEffect(()=>{
        
        Axios.get('http://localhost:3002/api/v2/currentAdmin',{
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
        const validationErrors = validateForm(values);
        if (Object.keys(validationErrors).length === 0) {
          // Form is valid, proceed with submission or other actions
          console.log('Form submitted:', values);


        Axios.post("http://localhost:3002/api/v2/loginAdmin",values
        , {
            withCredentials: true, // Enable sending and receiving cookies
          })
    .then((res)=>{
      //setValues(res.data)
      //const { token: newToken } = res.data;
      //setToken(newToken);
      props.setCurrent(res.data.user.role)
      //navigate('/dashboard')
      //console.log(res.data.user.role)
      //console.log(document.cookie)
      //const tokenCookie = document.cookie;
       // Access the 'token' cookie using document.cookie
       //const tokenCookie = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
      const tokenCookie=res.headers['Set-Cookie']
      //const token = res.headers['set-cookie'][0].split(';')[0].split('=')[1];
      //console.log( document.cookie.split('; '));
      
    // Store the token in a storage mechanism of your choice (e.g., localStorage or sessionStorage)
   // localStorage.setItem('token', 1234);
    })
    .catch((error)=>{
      console.log(error)
    })
        } else {
          // Set validation errors to display to the user
          setErrors(validationErrors);
        }

    }
    const validateForm = (data) => {
      const errors = {};
  
      if (!data.email.trim()) {
        errors.email = 'Email is required';
      } else if (!isValidEmail(data.email)) {
        errors.email = 'Invalid email format';
      }
      
      if (!data.password.trim()) {
        errors.password = 'Password is required';
      } else if (data.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
      }
  
      return errors;
    }
    const isValidEmail = (email) => {
      // Basic email validation, replace with a more robust solution if needed
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  return (
    <div>
        {props.toggle ? 
         <div className="container" id="container">
        <div className="form-container sign-up-container">
            
        </div>

        <div className="form-container sign-in-container">
            <form action="#" className='form-content'>
                <h1 className='heading'>Sign in</h1>
                <div class="infield">
                    <input className='input1' type="email" placeholder="Email" name='email' value={values.email} onChange={onInputChange}/>
                    <label className='label1'></label>
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>
                <div className="infield">
                    <input type="password" className='input1' placeholder="Password" name='password' value={values.password} onChange={onInputChange}/>
                    <label className='label1'></label>
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
              
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