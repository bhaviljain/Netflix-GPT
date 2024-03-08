import React, { useEffect } from 'react'
import { auth } from '../utils/Firebase'
import {onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
 const dispatch = useDispatch()
  useEffect (()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid , email , displayName , photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName:displayName, photoURL:photoURL}));
        // ...
        navigate('/browse')
      } else {
      dispatch(removeUser())
      navigate('/')
      }
    })
    return () => unsubscribe()
  },[])


  const user = useSelector(store=>store.userLoginLogout)
 const navigate = useNavigate()

  const handleSignout = () =>{
signOut(auth).then(() => {
  
//   // Sign-out successful.
}).catch((error) => {
//   // An error happened.
 });  
  }

  return (
    <div className='flex justify-between absolute top-[-100px] left-[-29px] z-10 w-screen bg-gradient-to-b from-black
'>
      <img className='h-[260px]' src='images/logo.png' alt='logo'/>
     { user && <div className='flex'>
      <img className='h-[36px] mt-[120px]' src={user?.photoURL} alt='usericon'/>
      <h3 className='text-red text-xl mt-[120px]'>{user?.displayName}</h3>
      <button onClick={handleSignout} className='p-2 m-2 bg-red-800 h-[15%] rounded-full mt-[120px] hover:bg-red-200 text-xs'>Sign <div> Out</div></button>


      </div>}
    </div>
  )
}

export default Header