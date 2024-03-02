import React from 'react'
import Header from './Header'
import usePlayNowMovie from '../Hooks/usePlayNowMovie'


const Browse = () => {
 
  usePlayNowMovie()
  return (
   <>
  


<Header />

   </>
  )
}

export default Browse




// const navigate = useNavigate()

  // const GOback = () => {
  //   navigate(-1)
  // }

  /* <button onClick={GOback}
className='py-1 px-4 bg-black rounded-xl
 text-white mt-2 ml-[90%] '

>Back</button> */