import React from 'react'
import Header from './Header'
import usePlayNowMovie from '../Hooks/usePlayNowMovie'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'
import usePopularMovies from '../Hooks/usePopularMovie'
import useTopRated from '../Hooks/useTopRated'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'
import Gpt from './gpt'


const Browse = () => {
 const showgptSearch = useSelector(state => state.gpt.showgptSearch)
  usePlayNowMovie()
  usePopularMovies()
  useTopRated()
  return (
   <>
   {showgptSearch ? <Gpt /> : <><MainContainer />
<SecondContainer /></>}



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