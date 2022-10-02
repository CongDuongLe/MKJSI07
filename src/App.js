import React,{useState} from 'react'
import Buoi7 from './components/Buoi7'
import FirebaseAuth from './components/FirebaseAuth'
import Main from './Main'
import TestGlobalStore from './page/components/TestGlobalStore'
import UserSection from './page/components/UserSection'
import Number from './page/layout/Number'
import PokemonList from './page/layout/PokemonList'
import Post from './page/layout/Post'
import Random from './page/layout/Random'
import { useUserStore } from './zustand/store/UserStore'
import FirebaseApp from './components/FirebaseApp'
import FirebaseAuthentication from './components/FirebaseAuthentication'
import { Login } from './components/Login'
import Home from './components/Home'
import RootRouter from './routes/RootRouter'
import Navbar from './components/Navbar'
import ApiLearning from './JSA/ApiLearning'
import WeatherAPI from './JSA/WeatherAPI'

const USER_KEY = 'user_key'
const GOOGLE_TOKEN = 'google_token'

const App = () => {

  const { 
    globalCount,
    resetGlobalCount,
    defaultString,
    resetString


  } = useUserStore(state => state)


  const {
    authors
  } = useUserStore(state => state.quoteInfo)

  
  console.log('author',authors)


  const userInLocalStorage = localStorage.getItem(USER_KEY)

  console.log(userInLocalStorage)

  const googleToken = localStorage.getItem(GOOGLE_TOKEN)




  // nhan dc ma token : abcxyzbalalala











  return (
    <div className='flex  h-screen w-screen bg-[#B1E1FF] justify-center items-center flex-col overflow-x-auto '>

    {/* <div className='text-3xl text-[#001E6C] px-8 py-2 ' >
      {number}
    </div>

    <div className='flex flex-row justify-around items-center'>
      <div 
        onClick ={increaseNumber}
        className='px-8 py-2 bg-[#4B7BE5] rounded-md text-white 
        text-lg mr-4 hover:bg-[#001D6E] scale-105 ease-in-out duration-200 transition-all'>
        Increment
      </div>
      <div 
        onClick ={decreaseNumber}
        className='px-8 py-2 bg-[#4B7BE5] rounded-md text-white text-lg hover:bg-[#001D6E] scale-105 ease-in-out duration-200 transition-all'>
        Decreament
      </div>
    </div>
      <Post/> */}
      {/* <Number
        number = {180}
      /> */}
      {/* <Random /> */}

      {/* <PokemonList/> */}
      {/* <h1 className='text-3xl text-[#001E6C] px-8 py-2' > globalCount from Store : {globalCount} </h1> */}
{/* 
      <UserSection 
        nameProps = {globalCount}
        /> */}

      {/* <h1
        className='text-3xl text-[#001E6C] px-8 py-2'
      
      >
        default String form store : {defaultString}
      </h1> */}
      {/* <TestGlobalStore />

      <div>
        <button
          onClick={resetGlobalCount}
          className='btn-action mr-4'>
          Reset Global Count
        </button>
        <button
          onClick={resetString}
          className='btn-action'>
          Reset Global String
        </button>
      </div> */}

{/* 
    
      {/* <Main/> */}
      
      {/* <Buoi7/> */}

      {/* <FirebaseAuth/> */}

      {/* <FirebaseApp/> */}
      {/* <FirebaseAuthentication /> */}

      {/* <Login/> */}


      {/* {
        userInLocalStorage ?  <Home/> : <Login/>
      } */}

      {/* {
        googleToken ? <Home/> : <Login/>
      } */}


      {/* <RootRouter/> */}

      {/* <ApiLearning/> */}
      <WeatherAPI/>




    </div>
  )
}

export default App