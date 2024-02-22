import React, { useRef, useState } from 'react'
import Header from './Header'
import { Checkvalidate } from '../utils/validate'



const Login = () => {
  const [signIn, setSignIn] = useState(true)
  const [errorMessage , setErrorMessage] = useState(null)



  const email = useRef(null)
const password = useRef(null)
const name = useRef(null)


  const handleSignInForm = (e) => {
    setSignIn(!signIn)
  }



  const handlebuttonform = ()=>{
   
    const message = Checkvalidate(email.current.value, password.current.value, name.current.value);
    setErrorMessage(message);
  }
  return (
    <div>
<Header />
<div>
<img className='h-[130vh] w-[auto] absolute object-cover flex flex-wrap' src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='bg'/>

    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='w-2/5 absolute right-0 left-0  bg-black my-36 mx-auto  p-7  
    h-auto bg-opacity-80 text-white'>
      <h1 className='text-white font-bold p-5'>{signIn ? "Sign IN" : "Sign Up"}</h1>
      {!signIn &&(
        <input className='h-10 rounded-lg w-full mb-4 bg-gray-700' type="text" placeholder="Name"
        ref={name}
        />
      )}
      <input 
      type="text" placeholder="Email Address"
      ref={email}
      className='h-10 rounded-lg w-full mb-4 bg-gray-700' 
      />
      <input 
      type="password" placeholder="Password" 
      ref={password}
      className='h-10 rounded-lg w-full mb-4 bg-gray-700' 
      />
      <p className='text-red-600 mb-3 font-bold'>{errorMessage}</p>
      <button onClick={handlebuttonform}  className='h-10 w-full bg-red-700 '>{signIn ? "Sign IN": "Sign Up"}</button>
      <p className='text-zinc-400  text-center my-5 cursor-pointer' onClick={handleSignInForm}>
      {signIn ? "New to Netflix? Sign up now.": "Already Registered?  Login In"}
   </p>
    </form>
    </div>
  )
}

export default Login