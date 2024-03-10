import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {API_options} from '../utils/Constants';
import { addTopRatedMovies } from "../utils/MovSlice";


const useTopRated = () =>
{
    const dispath =  useDispatch()
    const adduseTopRatedMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options)
      const json = await data.json()
      dispath(addTopRatedMovies(json.results))
      // console.log(json);
    }
      
      useEffect(() => {
        adduseTopRatedMovies()
      }, [])
    
}

export default useTopRated