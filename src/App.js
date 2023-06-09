import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from './Main/HomePage';

import UserHome from './User/UserHome';
import AdminLogin from './Admin/AdminLogin';
import AdminHome from './Admin/AdminHome';
import UserLogin from './User/UserLogin';
import UserRegistration from './User/UserRegistration';
import AddRatings from './User/AddRatings';
import Movies from './Movies'
function App() {




  return (
    <Router>
    <div className="App">
     <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/Adminlogin" element={<AdminLogin/>}></Route>
     
      <Route exact path="/UserHome/:uid" element={ <Movies><UserHome/></Movies>}></Route>
      
      <Route exact path="/AddRatings/:uid/:mid" element={<AddRatings/>}></Route>
      <Route exact path="/Userlogin" element={<UserLogin/>}></Route>
      <Route exact path="/UserReg" element={<UserRegistration/>}></Route>
      <Route exact path="/AdminHome" element={<AdminHome/>}></Route>
      
     </Routes>
    </div>
    </Router>
   
  );
}

export default App;
