import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from './Main/HomePage';

import UserHome from './User/UserHome';
import AdminLogin from './Admin/AdminLogin';
import AdminHome from './Admin/AdminHome';
function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/Adminlogin" element={<AdminLogin/>}></Route>
      <Route exact path="/UserHome" element={<UserHome/>}></Route>
      <Route exact path="/AdminHome" element={<AdminHome/>}></Route>
      
     </Routes>
    </div>
    </Router>
   
  );
}

export default App;
