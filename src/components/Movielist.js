import React from 'react'
import MovieCard from './MovieCard'

export const Movielist = ({title , movies}) => {
  
  return (
    <div className=''>

        <h3 className='font-bold  p-2.5 text-2xl text-white'>{title}</h3>
        <div className='flex  overflow-x-scroll  overflow-y-hidden
        
        '>
        {movies &&
        movies.map((movie)=> <MovieCard poster = {movie.poster_path} id={movie.id} key={movie.id}/>
        
)}


        </div>
       
    
       
    </div>
  )
}
