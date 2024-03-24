import React from 'react'
import { backGround } from '../utils/Constants';
import lang from '../utils/Language';
import { useSelector } from 'react-redux';


const GptSearch = () => {
  const langKey = useSelector(state =>state.config.lang)
 
  return (
    <>
   
    <div className='pt-[20%] flex justify-center'>
  <form className='bg-black w-1/2 grid grid-cols-12 z-10' onSubmit={(e)=>e.preventDefault()}>
    <input type='text' className='p-1 m-2 border-2 border-red-700 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}></input>
    <button className='bg-red-700 m-[10px] rounded-xl text-white col-span-3'>{lang[langKey].search}</button>
  </form>
    </div>
    </>
  )
}

export default GptSearch