import React from 'react'
import { IMG_CDN } from '../utils/Constants';

const MovieCard = ({poster}) => {
  return (
    <div>
    <div className='w-[100px] pr-5'>
    <img src={IMG_CDN + poster}></img>

    </div>
    </div>
  )
}

export default MovieCard