import React,{useState} from 'react'
import {auth} from '../firebase/firebase.config'

import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {GoogleButton} from 'react-google-button'

const USER_KEY = 'user_key'
const GOOGLE_TOKEN = 'google_token'

export const Login = () => {

    const provider = new GoogleAuthProvider();



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [saveUser, setSaveUser] = useState(null)

    console.log(password)


    const loginWithEmailAndPassword = async (e) => {
        e.preventDefault()
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // alert('Login successfully')
        setSaveUser(user)
        localStorage.setItem(USER_KEY, saveUser.accessToken)
        window.location.reload()
        // ...
        }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });

    }


    console.log(saveUser)


    const handleGoogleSignIn = async (e) => {
        await signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log(token)
          localStorage.setItem(GOOGLE_TOKEN, token)
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }


    







  return (
    <div>

        {/* <p>{saveUser.accessToken}</p> */}


        <form
          autoComplete="off"
          className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
          aria-label="signup-form"
        >
          <h2 className="mb-10 text-3xl font-bold text-center">Login with Email and Password</h2>
          <div className="flex flex-col items-start mb-5 gap-y-3">
            <label htmlFor="email" className="text-sm font-medium cursor-pointer">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="Enter your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start mb-5 gap-y-3">
            <label
              htmlFor="password"
              className="text-sm font-medium cursor-pointer"
            >
              Password
            </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="button-buoi7"
            onClick={loginWithEmailAndPassword}
          >
            Login
          </button>

            <GoogleButton 
                className='mt-5'
                onClick={() => {
                    handleGoogleSignIn()
                    console.log('clicked google button') }}
            />



        </form>



    </div>
  )
}
