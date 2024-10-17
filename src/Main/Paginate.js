import React from 'react'
import './Style/Paginate.css'
function Paginate({ moviesPerPage, totalmovies,paginate,previousPage,nextPage}) {
    const pageNumbers = [];
   
    for (let i = 1; i <= Math.ceil(totalmovies / moviesPerPage); i++) { 
       pageNumbers.push(i);
    }
   
  return (
    <div className="pagination-container">
    <ul className="pagination">
       <li onClick={previousPage} className="page-number">
          Prev
       </li>
       {pageNumbers.map((number) => (
          <li
             key={number}
             onClick={() => paginate(number)}
             className="page-number"
          >
             {number}
          </li>
       ))}
       <li onClick={nextPage} className="page-number">
          Next
       </li>
    </ul>
 </div>

  )
}

export default Paginate