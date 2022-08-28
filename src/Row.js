import axios from "./axios"
import React, { useEffect, useState } from 'react'
import "./Row.css"

const Row=(props)=> {
  const [movies,setMovies]=useState([]);
 const base_url="https://image.tmdb.org/t/p/original/"
  useEffect(()=>{
  async function fetchData(){
    const request=await axios.get(props.fetchUrl);
    setMovies(request.data.results);
    return request;

  }
  fetchData();
  },[props.fetchUrl])

  console.log(movies);

  return (
   
        <div className='row'>
        <h2>{props.title}</h2>
        <div className="row-posters">
        {
            movies.map(movie=>(
                <img className={`row-poster ${props.isLargeRow&&"row-posterLarge"}`} src={`${base_url}${props.isLargeRow?movie.poster_path:movie.backdrop_path}`} alt="" />
            ))
        }
        </div>
        
       
    </div>
  
    
  )
}

export default Row