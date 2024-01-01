import './App.css';
import ComplaintDetails from './components/ComplaintDetails';
import ComplaintEdit from './components/ComplaintEdit';
import ComplaintReg from './components/ComplaintReg';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Routes,Route, Navigate, useNavigate } from 'react-router-dom';
import Utilities from './components/Utilities';
import ComplaintView from './components/ComplaintView';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useEffect, useState } from 'react';

import  Axios  from 'axios'; 
import LoginSignup from './components/LoginSignup';
import Layout from './components/Layout';
import { api_route } from './constants';
function App() {
  const [current,setCurrent]=useState('')

  
    const [token, setToken] = useState();

   
    useEffect(()=>{
      /*function getCookie(name) {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
          const [cookieName, cookieValue] = cookie.split('=');
          if (cookieName === name) {
            // Decode the cookie value
            return decodeURIComponent(cookieValue);
          }
        }
        return null; // Cookie not found
      }
      
      // Usage
      const tokenValue = getCookie('token');
      console.log('Token value:', tokenValue);*/
      
      Axios.get(api_route + '/currentAdmin',{
        withCredentials: true,
      })
      .then((res)=>{
        console.log(res)
        console.log(res.data.admin.role)
        setCurrent(res.data.admin.role)
      })
      .catch((error)=>{
        console.log(error)
      })
    },[]);
    
   // const navigate=useNavigate()
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path='/'  element={ document.cookie && current==='admin' ? <Navigate to="/dashboard" /> : <LoginSignup setCurrent={setCurrent}/> } />
        
        
        <Route exact path='/dashboard'  element={ document.cookie && current==='admin' ? <Layout/> : <Navigate to="/" />}  />

              <Route exact path='/complaint-details'  element={ document.cookie && current==='admin' ? <Layout><ComplaintDetails/></Layout> : <Navigate to="/" />} />
                <Route exact path='/complaint-details/edit/:id' element={document.cookie && current==='admin' ? <Layout><ComplaintEdit/></Layout> : <Navigate to="/" />}/>
                <Route exact path='/complaint-details/view/:id' element={document.cookie && current==='admin' ? <Layout><ComplaintView/></Layout> : <Navigate to="/" />} />
              
              <Route exact path='/new-complaint' element={document.cookie && current==='admin' ? <Layout><ComplaintReg/></Layout> : <Navigate to="/" />}/>
              <Route exact path='/utilities' element={document.cookie && current==='admin' ? <Layout><Utilities/></Layout> : <Navigate to="/" />}/>
          

           <Route exact path='/dashboard'  element={document.cookie && current==='section-admin' ? <Layout/> : <Navigate to="/" />}  />

              <Route exact path='/complaint-details'  element={ document.cookie && current==='section-admin' ? <Layout><ComplaintDetails/></Layout> : <Navigate to="/" />} />
                <Route exact path='/complaint-details/edit/:id' element={document.cookie && current==='section-admin' ? <Layout><ComplaintEdit/></Layout> : <Navigate to="/" />}/>
                <Route exact path='/complaint-details/view/:id' element={document.cookie && current==='section-admin' ? <Layout><ComplaintView/></Layout> : <Navigate to="/" />} />
              
              <Route exact path='/new-complaint' element={document.cookie && current==='section-admin' ? <Layout><ComplaintReg/></Layout> : <Navigate to="/" />}/>
              <Route exact path='/utilities' element={document.cookie && current==='section-admin' ? <Layout><Utilities/></Layout> : <Navigate to="/" />}/>
          
          
        
        </Routes>
      </Router>
      {// current=="admin" ? <AllRoutes/>:
     // current==='admin' ? <AllRoutes current={current} /> : <LoginSignup/>
        // current=="section-admin" ? <AllRoutes/> :
         //toggle ? <Login toggle={toggle} onToggle={onToggle}/> :
         // <SignUp toggle={toggle} onToggle={onToggle}/>
         
      }
        
        
      
   
    </div>
  );
}

export default App;