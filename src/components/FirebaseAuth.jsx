import React,{useState, useEffect} from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from 'firebase/auth'
import { auth } from '../firebase/firebase.config'
import { GoogleButton } from 'react-google-button';
import { async } from '@firebase/util';

const FirebaseAuth = () => {

    const [userSave, setUserSave] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const signUpWithEmailAndPassword = async (e) => {

        console.log(email)
        console.log(password)

        e.preventDefault()
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // alert create account successfully

            alert('Create account successfully')


          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

    }


    const loginWithEmailAndPassword = async (e) => {
        e.preventDefault()
        const UserAuth = await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }







  return (
    <div>

            {
                userSave && (<div>

                    <h1>
                        Wellcome {userSave.email}
                    </h1>

                </div>)
            }
         <form
                autoComplete="off"
                className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow"
                aria-label="signup-form"
              >
                <h2 className="mb-10 text-3xl font-bold text-center">Sign Up With Firebase</h2>
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
                    active:bg-blue-600 focus:outline-none focus:shadow-outline hover:bg-blue-600 transition ease-in-out duration-300
                  "
                >
                  Sign Up
                </button>
              </form>  

    </div>
  )
}

export default FirebaseAuth