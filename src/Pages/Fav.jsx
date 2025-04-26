import React from 'react'
import '../CSS/Fav.css'
import { useMovieContext } from '../Context/MovieContext'
import MovieCard from '../Components/MovieCard'

function Fav() {
  const {fav}=useMovieContext();

  if(fav){
    return <div className='movies-grid'>
    {fav.map((movie)=>
       (
        <MovieCard movie={movie} key={movie.id}/>))}
</div>
  }
  return (
    <div className='fav-empty'>
      <h2>
         No Favorite Movies Yet
      </h2>
      <p>Start adding movies to your Favorites and they will apper here.</p>
    </div>
  )
}

export default Fav
