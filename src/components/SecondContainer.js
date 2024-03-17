import React from 'react'
import { useSelector } from 'react-redux'
import { Movielist } from './Movielist'

const SecondContainer = () => {
  const movies = useSelector((store) =>store.Movie)
  return (
    console.log(movies.TopRated),

    <div className='bg-black p-10 '>
    <div className='-mt-[90px] relative z-20 '>
      <Movielist  title={'Now Playing'} movies = {movies.addPlayingNowMovie} />
      <Movielist  title={'Popular'} movies = {movies.popularMovie} />
      <Movielist  title={'Top Rated'} movies = {movies.TopRated} />
     
      </div>
    </div>
  )

}

export default SecondContainer