import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [signIn, setSignIn] = useState(true)
  const handleSignInForm = (e) => {
    setSignIn(!signIn)
  }
  
  return (
    <div>
<Header />
<div>
<img className='h-[130vh] w-[auto] absolute object-cover flex flex-wrap' src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='bg'/>

    </div>
    <form className='w-2/5 absolute right-0 left-0  bg-black my-36 mx-auto  p-7  
    h-auto bg-opacity-80 text-white'>
      <h1 className='text-white font-bold p-5'>{signIn ? "Sign IN" : "Sign Up"}</h1>
      {!signIn &&(
        <input className='h-10 rounded-lg w-full mb-4 bg-gray-700' type="text" placeholder="Name" />
      )}
      <input className='h-10 rounded-lg w-full mb-4 bg-gray-700' type="text" placeholder="Username"/>
      <input className='h-10 rounded-lg w-full mb-4 bg-gray-700' type="password" placeholder="Password" />
      <button  className='h-10 w-full bg-red-700 '>{signIn ? "Sign IN": "Sign Up"}</button>
      <p className='text-zinc-400  text-center my-5 cursor-pointer' onClick={handleSignInForm}>
      {signIn ? "New to Netflix? Sign up now.": "Already Registered?  Login In"}
   </p>
    </form>
    </div>
  )
}

export default Login