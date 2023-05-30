import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from './HomePage';
import AdminHome from './Admin/AdminHome';
import UserHome from './User/UserHome';
function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/AdminHome" element={<AdminHome/>}></Route>
      <Route exact path="/UserHome" element={<UserHome/>}></Route>
     </Routes>
    </div>
    </Router>
   
  );
}

export default App;
