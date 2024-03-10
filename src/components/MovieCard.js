import React from 'react'
import { IMG_CDN } from '../utils/Constants';

const MovieCard = ({poster}) => {
  return (
    <div>
    <div className='w-[120px] pr-5 hover:scale-125 transition-all duration-500'>
    <img alt='cards' src={IMG_CDN + poster}></img>

    </div>
    </div>
  )
}

export default MovieCard