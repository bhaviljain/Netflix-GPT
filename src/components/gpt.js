import React from 'react'
import { backGround } from '../utils/Constants'
import GptSearch from './GptSearch'

const Gpt = () => {
  return (
    <div>
         <div>
    <img className='h-[130vh] w-[auto] absolute object-cover flex flex-wrap' src={backGround} alt='bg'/>
    </div>
    <GptSearch />
    
    </div>
  )
}

export default Gpt