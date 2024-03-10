import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {API_options} from '../utils/Constants';
import { addPopularMovie } from "../utils/MovSlice";

const usePopularMovies = () =>
{
    const dispath =  useDispatch()
    const addPopularMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_options)
      const json = await data.json()
      dispath(addPopularMovie(json.results))
      // console.log(json);
    }
      
      useEffect(() => {
        addPopularMovies()
      }, [])
    
}

export default usePopularMovies