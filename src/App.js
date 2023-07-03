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
import EditMovie from './Admin/EditMovie';
import Error from './Error'


import ProtectedRoutes from './ProtectedRoutes';
function App() {
  let auth=false;
  let adminauth=false;
if(sessionStorage.getItem('UserEmail')){
auth=true;
}
if(sessionStorage.getItem('adminEmail')){
  adminauth=true;
}



  return (
    <Router>
    <div className="App">
     <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/UserReg" element={<UserRegistration/>}></Route>
      
   
     
 
    {
      auth?(
 <Route element={<ProtectedRoutes/>}>
      <Route exact path="/UserHome/:uid" element={ <Movies><UserHome/></Movies>}></Route>
      
      <Route exact path="/AddRatings/:uid/:mid" element={<AddRatings/>}></Route>
      </Route>
      ):<Route exact path="/Userlogin" element={<UserLogin/>}></Route>
}
      

{
  adminauth?(
    <Route element={<ProtectedRoutes/>}>
<Route exact path="/movieDetails/:mid" element={<Movies><EditMovie/></Movies>}></Route>
      
      <Route exact path="/AdminHome" element={<Movies><AdminHome/></Movies>}></Route>

    </Route>
  ):<Route exact path="/Adminlogin" element={  <AdminLogin/>}></Route>
}

      
       <Route exact path="*" element={<Error/>}></Route> 
      
     </Routes>
    </div>
    </Router>
   
  );
}

export default App;
