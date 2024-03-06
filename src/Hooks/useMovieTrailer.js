import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/MovSlice"
import { API_options } from "../utils/Constants"
import { useEffect } from "react"

const useMovieTrailer = (movieID) =>
{
    const dispatch = useDispatch()
    const getMovieVideo = async() =>{
const data=await fetch('https://api.themoviedb.org/3/movie/'+
      movieID + 
      '/videos?language=en-US', API_options)
      const json = await data.json()
      console.log(json);
      // const trailer = json.results.filter((video)=> video.type === "Trailer")
      // const OfficalTrailer =trailer.length ? trailer[0] : json.results[0]
      // console.log(OfficalTrailer);
      // console.log(json);
      // setTrailerID(OfficalTrailer.key)
       const trailer = json?.results[1]
       dispatch(addTrailerVideo(trailer))
    }
  
    useEffect(() =>{
      getMovieVideo()
    },[])
}
export default useMovieTrailer