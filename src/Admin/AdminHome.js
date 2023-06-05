import React,{useState} from 'react'
import AdminNavbar from './AdminNavbar'
import AddMovies from './AddMovies';
import './Styles/AdminHome.css'
import DisplayMovies from './DisplayMovies';
import Dashboard from './Dashboard';
function AdminHome() {
  const [addmovies,setaddmovies]=useState(false);
  const [viewmovies,setviewmovies]=useState(false);
  const [viewdashboard,setviewdashboard]=useState(false);

const dashboardview=()=>{
  setaddmovies(false);
  setviewmovies(false);
  setviewdashboard(true);
}
  const addMoviesTab=()=>{
    setaddmovies(true);
    setviewmovies(false);
    setviewdashboard(false);
  }
  const ViewMoviesTab=()=>{
    setaddmovies(false);
    setviewmovies(true);
    setviewdashboard(false);

  }
  return (
    <div>
        <AdminNavbar/>
        <div className='admin-main-container'>
          <div className='admin-sidebar'>
          <button onClick={dashboardview}>Dashboard</button><br/>
            <button onClick={addMoviesTab}>Add Movies</button><br/>
            <button onClick={ViewMoviesTab}>View Movies</button>
            

          </div>
          <div className='admin-container'>
{
  addmovies?<AddMovies/>:""
}
{
  viewmovies?<DisplayMovies/>:""
}
{
  viewdashboard?<Dashboard/>:""
}

          </div>

        </div>
        </div>
  )
}

export default AdminHome
