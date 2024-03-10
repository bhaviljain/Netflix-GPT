import React from 'react'
import { IMG_CDN } from '../utils/Constants';

const MovieCard = ({poster}) => {
  return (
    <div>
    <div className='w-[15vw] pr-5'>
    <img alt='cards' src={IMG_CDN + poster}></img>

    </div>
    </div>
  )
}

export default MovieCard