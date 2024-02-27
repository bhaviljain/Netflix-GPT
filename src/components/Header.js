import React from 'react'
import { auth } from '../utils/Firebase'
import {getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const userLogo = useSelector(state=>state.user)
 const navigate = useNavigate()

  const handleSignout = () =>{
signOut(auth).then(() => {
  navigate('/')
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }

  return (
    <div className='flex justify-between absolute top-[-100px] left-[-29px] z-10 w-full
    bg-gradient-to-b from-black'>
      <img className='h-[260px]' src='images/logo.png' alt='logo'/>
      <div className='flex'>
      <img className='h-[36px] mt-[120px]' src={userLogo?.photoURL} alt='usericon'/>
      <button onClick={handleSignout} className='p-2 m-2 bg-red-800 h-[15%] rounded-full mt-[120px] hover:bg-red-200 text-xs'>Sign <div> Out</div></button>


      </div>
    </div>
  )
}

export default Header