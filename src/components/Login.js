import React, {useState, useRef} from 'react'
import { checkValidData } from '../utils/validate';
import Header from './Header';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth, provider} from '../utils/firebase';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [error, setError] = useState('');
    const email = useRef(null);
    const password = useRef(null);
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick =()=>{
       const message =  checkValidData(email.current.value, password.current.value);
       setError(message);
       if(message) return;
//signin and signup form
if(!isSignInForm){
//signup

}else{
//sign in 
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("user", user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode + "-" + errorMessage);
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
        }
  return (
    <div className='form-wrapper'>
        <Header/>
        <div className='absolute h-full w-full'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_small.jpg"
            alt="bg-image"
            className='h-full w-full '/>
        </div>
        <form onSubmit = {(e)=>e.preventDefault()}className='absolute bg-black w-3/12 mx-auto right-0 left-0 my-48 p-10 bg-opacity-70 rounded-md text-white flex flex-col gap-8'>
            <h3 className='text-3xl'>{isSignInForm? "Sign In": "Sign Up"}</h3>
            <input type="text" ref={email} placeholder='Email or mobile number' className='p-4 w-full bg-gray-700 bg-opacity-70 border-2 border-white-20 '/>
            {!isSignInForm &&  <input type="text" placeholder='Full name' className='p-4 w-full bg-gray-700 bg-opacity-70 border-2 border-white-20 '/>}
            <input type="password"ref={password} placeholder='Password' className='p-4 w-full bg-gray-700 bg-opacity-70 border-2 border-white-20 '/>
            {error && <p className='text-red-700 text-xl text-bold'>{error}</p>}
            <button className='p-4  w-full bg-red-700 rounded-md' onClick={handleButtonClick}>{isSignInForm? "Sign In": "Sign Up"}</button>
            <p onClick={toggleSignInForm} className="cursor-pointer">{isSignInForm? "New to Netflix? Sign up now.":"Already registered? Sign in now."}</p>
        </form>
    </div>
  )
}

export default Login