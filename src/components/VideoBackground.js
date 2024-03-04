import React, { useEffect, useState } from 'react'
import { API_options } from '../utils/Constants'
export const VideoBackground = ({movieID}) => {
  const [traileID , setTrailerID] = useState(null)

  const getMovieVideo = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/1096197/videos?language=en-US', API_options )
    const json = await data.json()
    // console.log(json);
    const trailer = json.results.filter((video)=> video.type === "Trailer")
    const OfficalTrailer =trailer.length ? trailer[0] : json.results[0]
    console.log(OfficalTrailer);
    setTrailerID(OfficalTrailer.key)
  }

  useEffect(() =>{
    getMovieVideo()
  },[])
  return (
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + traileID} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}
