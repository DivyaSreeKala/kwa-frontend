import './App.css';
import ComplaintDetails from './components/ComplaintDetails';
import ComplaintEdit from './components/ComplaintEdit';
import ComplaintReg from './components/ComplaintReg';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Utilities from './components/Utilities';
import ComplaintView from './components/ComplaintView';
function App() {
  return (
    <div>
      <Router>
          <Sidebar/>
          <Routes>
              <Route path='/complaint-details'  element={<ComplaintDetails/>} />
                <Route path='/complaint-details/edit/:id' element={<ComplaintEdit/>}/>
                <Route path='/complaint-details/view/:id' element={<ComplaintView/>} />
              
              <Route path='/new-complaint' element={<ComplaintReg/>}/>
              <Route path='/utilities' element={<Utilities/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;