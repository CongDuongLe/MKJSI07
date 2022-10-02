// lệnh nhanh để khai báo 1 component 

// rafce + tab

import React,{useState} from 'react'

import {auth} from '../firebase/firebase.config'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from 'firebase/auth'
import { async } from '@firebase/util'



const FirebaseAuthentication = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [saveUser, setSaveUser] = useState(null)

    console.log('email', email)

    console.log('password', password)

    // logic cua ham dang ki tai khoan bang firebase

    const signUpWithEmailAndPassword = async(e) => {

        e.preventDefault()

            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('Create account successfully')
            // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            })
    }





  return (
    <div>
     <form
       autoComplete="off"
       className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
       aria-label="signup-form"
     >
       <h2 className="mb-10 text-3xl font-bold text-center">Google SignUp </h2>
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
           type="password"
           className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
           placeholder="Enter your password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
         />
       </div>
       <button
         type="submit"
         onClick={signUpWithEmailAndPassword}
         className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]
            active:bg-blue-600 active:scale-110 transition-all ease-in-out duration-500 hover:shadow-lg
         "
       >
         Create an account
       </button>
     </form>
    </div>
  )
}

export default FirebaseAuthentication