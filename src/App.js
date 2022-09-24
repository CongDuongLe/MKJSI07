import React,{useState} from 'react'
import Buoi7 from './components/Buoi7'
import FirebaseApp from './components/FirebaseApp'
import Main from './Main'
import TestGlobalStore from './page/components/TestGlobalStore'
import UserSection from './page/components/UserSection'
import Number from './page/layout/Number'
import PokemonList from './page/layout/PokemonList'
import Post from './page/layout/Post'
import Random from './page/layout/Random'
import { useUserStore } from './zustand/store/UserStore'

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
      <FirebaseApp/> */}
      {/* <Main/> */}
      
      <Buoi7/>

    </div>
  )
}

export default App