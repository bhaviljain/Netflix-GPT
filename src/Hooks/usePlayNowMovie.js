import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addPlayingNowMovie } from "../utils/MovSlice"
import {API_options} from '../utils/Constants';


const usePlayNowMovie = () =>
{
    const dispath =  useDispatch()
    const nowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options)
      const json = await data.json()
      dispath(addPlayingNowMovie(json.results))
      // console.log(json);
    }
      
      useEffect(() => {
       nowPlayingMovies()
      }, [])
    
}

export default usePlayNowMovie