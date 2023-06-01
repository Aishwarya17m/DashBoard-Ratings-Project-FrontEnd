import React,{useState} from 'react'
import AdminNavbar from './AdminNavbar'
import AddMovies from './AddMovies';
import './Styles/AdminHome.css'
import DisplayMovies from './DisplayMovies';
function AdminHome() {
  const [addmovies,setaddmovies]=useState(false);
  const [viewmovies,setviewmovies]=useState(false);


  const addMoviesTab=()=>{
    setaddmovies(true);
    setviewmovies(false);
  }
  const ViewMoviesTab=()=>{
    setaddmovies(false);
    setviewmovies(true);

  }
  return (
    <div>
        <AdminNavbar/>
        <div className='admin-main-container'>
          <div className='admin-sidebar'>
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

          </div>

        </div>
        </div>
  )
}

export default AdminHome