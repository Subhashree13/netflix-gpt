import React, {useState} from 'react'
import Header from './Header';
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_small.jpg"
            alt="bg-image"
            className='h-full w-full '/>
        </div>
        <form className='absolute bg-black w-3/12 mx-auto right-0 left-0 my-48 p-10 bg-opacity-70 rounded-md text-white flex flex-col gap-8'>
            <h3 className='text-3xl'>{isSignInForm? "Sign In": "Sign Up"}</h3>
            <input type="text" placeholder='Email or mobile number' className='p-4 w-full bg-gray-700 bg-opacity-70 border-2 border-white-20 '/>
            {!isSignInForm &&  <input type="text" placeholder='Full name' className='p-4 w-full bg-gray-700 bg-opacity-70 border-2 border-white-20 '/>}
            <input type="password" placeholder='Password' className='p-4 w-full bg-gray-700 bg-opacity-70 border-2 border-white-20 '/>
            <button className='p-4  w-full bg-red-700 rounded-md'>{isSignInForm? "Sign In": "Sign Up"}</button>
            <p onClick={toggleSignInForm} className="cursor-pointer">{isSignInForm? "New to Netflix? Sign up now.":"Already registered? Sign in now."}</p>
        </form>
    </div>
  )
}

export default Login