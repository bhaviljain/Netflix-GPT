import React from 'react'
import Header from './Header'
import usePlayNowMovie from '../Hooks/usePlayNowMovie'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import VideoTitle from './VideoTitle'
import { VideoBackground } from './VideoBackground'


const Browse = () => {
 
  usePlayNowMovie()
  return (
   <>


<Header />
<MainContainer />
<SecondContainer />
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