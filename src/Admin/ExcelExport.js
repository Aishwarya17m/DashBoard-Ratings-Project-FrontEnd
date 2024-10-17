import React, { useEffect ,useContext, useState} from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { MovieContext } from '../MovieContext';
import axios from 'axios';
function ExcelExport({filename,total,users}) {
    const [movies] = useContext(MovieContext)
    const [moviedata,setmoviedata]=useState([])
  
    useEffect(()=>{
        
        const fetchdata=()=>{
       
            const mov=movies.map(res=>({
                "MovieId":res.movieId,
                "MovieName":res.movieName,
                "Language":res.language,
                "OverallRating":total[res.movieId],
                "Category":res.category,
                "ReleaseDate":res.releaseDate,
                "TotalUserRated":users[res.movieId]===undefined?"No Users Rated":users[res.movieId]
            }))
               setmoviedata(mov) 
        }

fetchdata();
    },[total])
    
    const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const exportToCSV = ( filename,moviedata) => {
   

    const ws = XLSX.utils.json_to_sheet(moviedata);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, filename + fileExtension);
  };
  return (
    <div>
        <button onClick={(e)=>exportToCSV(filename,moviedata)}>Export</button>
    </div>
  )
}

export default ExcelExport