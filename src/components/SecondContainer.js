import React from 'react'
import { useSelector } from 'react-redux'
import { Movielist } from './Movielist'
import lang from '../utils/Language'

const SecondContainer = () => {
 
  const langKey = useSelector(state =>state.config.lang)

  const movies = useSelector((store) =>store.Movie)
  return (
    console.log(movies.TopRated),

    <div className='bg-black p-10 '>
    <div className='-mt-[90px] relative z-20 '>
      <Movielist  title={lang[langKey]?.NowPlaying} movies = {movies.addPlayingNowMovie} />
      <Movielist  title={lang[langKey]?.Popular} movies = {movies.popularMovie} />
      <Movielist  title={lang[langKey]?.TopRated} movies = {movies.TopRated} />
     
      </div>
    </div>
  )

}

export default SecondContainer