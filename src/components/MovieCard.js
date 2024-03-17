import React from 'react'
import { IMG_CDN } from '../utils/Constants';
import { Link } from 'react-router-dom';


const MovieCard = ({poster,id}) => {

  return (
    <div>
    <div className='w-[120px] pr-5 hover:scale-125 transition-all duration-500'>
      <Link to={"/browse/" + id}>
    <img alt='cards' src={IMG_CDN + poster}
    ></img>
    </Link>
    </div>
    
    </div>
  )
}

export default MovieCard