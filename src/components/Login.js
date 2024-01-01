import React, { useEffect, useState } from 'react'
import './Login.css'
import SignUp from './SignUp'
import  Axios  from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { api_route } from '../constants'
function Login(props) {
    const [values,setValues]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate()
    const onInputChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
      }
      const [token,setToken]=useState(null)
     
      const [current,setCurrent]=useState('')
  
      useEffect(()=>{
        
        Axios.get(api_route + '/currentAdmin',{
          withCredentials: true,
        })
        .then((res)=>{
          console.log(res)
          console.log(res.data.admin.role)
          setCurrent(res.data.admin.role)
          
         // if (res.data.admin.role==='admin'){
          //navigate('/dashboard')}
          //else if (res.data.admin.role==='section-admin'){
          //  navigate('/dashboard')//////////////////////////
          //}

        })
        .catch((error)=>{
          console.log(error)
        })
      },[]);

    const onLogin=(e)=>{
        e.preventDefault()
        console.log(values)
        
        Axios.post( api_route + "/loginAdmin",values
        , {
            withCredentials: true, // Enable sending and receiving cookies
          })
    .then((res)=>{
      //setValues(res.data)
      //const { token: newToken } = res.data;
      //setToken(newToken);
      props.setCurrent(res.data.user.role)
      navigate('/dashboard')
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
                <div class="infield">
                    <input className='input1' type="email" placeholder="Email" name='email' value={values.email} onChange={onInputChange}/>
                    <label className='label1'></label>
                </div>
                <div className="infield">
                    <input type="password" className='input1' placeholder="Password" name='password' value={values.password} onChange={onInputChange}/>
                    <label className='label1'></label>
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