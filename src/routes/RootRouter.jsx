import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import FirebaseAuthentication from '../components/FirebaseAuthentication';
import Home from '../components/Home';
import { Login } from '../components/Login';
import Navbar from '../components/Navbar';
import PokemonList from '../page/layout/PokemonList';



const RootRouter = () => {
  return (
    <div className='w-full h-full '>

   
    <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<FirebaseAuthentication />}/>
            <Route  path = '/login' element = {<Login />}/>
            <Route path ='/home' element ={<Home/>} />
            <Route path = '/error' element = {<h1>404 Not Found</h1>}/>
            <Route path  ='/pokemon' element = {<PokemonList/>}  />
        </Routes>
    </BrowserRouter>


    {/* <Navbar/> */}

    </div>
  )
}

export default RootRouter