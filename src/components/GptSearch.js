import React from 'react'
import { backGround } from '../utils/Constants';


const GptSearch = () => {

 
  return (
    <>
   
    <div className='pt-[20%] flex justify-center'>
  <form className='bg-black w-1/2 grid grid-cols-12 z-10' onSubmit={(e)=>e.preventDefault()}>
    <input type='text' className='p-1 m-2 border-2 border-red-700 col-span-9' placeholder='Search Your Favourite Movie'></input>
    <button className='bg-red-700 m-[10px] rounded-xl text-white col-span-3'>Search</button>
  </form>
    </div>
    </>
  )
}

export default GptSearch