import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer'

export const VideoBackground = ({movieID}) => {
  const trailerVideo = useSelector((store) =>store.Movie?.trailer)
  useMovieTrailer(movieID)
 
  return (
    <div className='w-screen aspect-video'>
      <iframe className='w-screen aspect-video h-[100vh]' src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}
