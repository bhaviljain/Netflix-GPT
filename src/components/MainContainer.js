import React from 'react'
import VideoTitle from './VideoTitle'
import { VideoBackground } from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store)=>store.Movie?.addPlayingNowMovie)
    if(movies===null) return

    const mainMovieThatDisplay = movies[0]
    console.log(mainMovieThatDisplay);

  return (
    <div>
 <VideoTitle title = 
 {mainMovieThatDisplay.original_title
}  overview = {mainMovieThatDisplay.overview}/>
 <VideoBackground movieID = {mainMovieThatDisplay.id} />

    </div>
  )
}

export default MainContainer