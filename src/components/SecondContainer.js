import React from 'react'
import { useSelector } from 'react-redux'
import { Movielist } from './Movielist'

const SecondContainer = () => {
  const movies = useSelector((store) =>store.Movie)
  return (
    <div>



      <Movielist  title={'Now Playing'} movies = {movies.addPlayingNowMovie} />
    </div>
  )
}

export default SecondContainer