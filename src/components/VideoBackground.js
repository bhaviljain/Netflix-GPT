import React, { useEffect } from 'react'
import { API_options } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/MovSlice'

export const VideoBackground = ({movieID}) => {
  const dispatch = useDispatch()
  const trailerVideo = useSelector((store) =>store.Movie?.trailer)
  const getMovieVideo = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/1096197/videos?language=en-US', API_options )
    const json = await data.json()
    console.log(json);
    // const trailer = json.results.filter((video)=> video.type === "Trailer")
    // const OfficalTrailer =trailer.length ? trailer[0] : json.results[0]
    // console.log(OfficalTrailer);
    // console.log(json);
    // setTrailerID(OfficalTrailer.key)
     const trailer = json.results[1]
     dispatch(addTrailerVideo(trailer))
  }

  useEffect(() =>{
    getMovieVideo()
  },[])
  return (
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailerVideo?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}
