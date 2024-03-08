import React from 'react'
import MovieCard from './MovieCard'

export const Movielist = ({title , movies}) => {
 console.log(movies);
  return (
    <div className='bg-black'>

        <h3 className='font-bold p-2.5 text-2xl text-white'>{title}</h3>
        <div className='flex  overflow-x-scroll
        
        '>
        {movies &&
        movies.map(movie=> <MovieCard poster = {movie.poster_path}/>
)}
        </div>
       
    
       
    </div>
  )
}
