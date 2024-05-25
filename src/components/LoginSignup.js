import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

function LoginSignup({setCurrent}) {
    const [toggle,setToggle]=useState(true)
    const [login,setLogin]=useState()
    const onToggle=()=>{
      setToggle(!toggle)}
    const onLogin=()=>{
      setLogin(!login)
    }
  return (
    <div>
        {
          toggle ? <Login toggle={toggle} onToggle={onToggle} setCurrent={setCurrent}/> : <SignUp toggle={toggle} onToggle={onToggle}/>
        
      }
  
    </div>
  )
}

export default LoginSignup