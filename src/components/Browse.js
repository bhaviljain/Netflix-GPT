import React from 'react'
import Header from './Header'
import {API_options} from '../utils/Constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayingNowMovie } from '../utils/MovSlice';

const Browse = () => {
  const dispath =  useDispatch()
const nowPlayingMovies = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options)
  const json = await data.json()
  dispath(addPlayingNowMovie(json.results))
  console.log(json);
}


  // const navigate = useNavigate()

  // const GOback = () => {
  //   navigate(-1)
  // }
  useEffect(() => {
   nowPlayingMovies()
  }, [])
  
  return (
   <>
  

{/* <button onClick={GOback}
className='py-1 px-4 bg-black rounded-xl
 text-white mt-2 ml-[90%] '

>Back</button> */}
<Header />

   </>
  )
}

export default Browse