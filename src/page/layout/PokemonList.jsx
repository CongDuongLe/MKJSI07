import React,{useState, useEffect, useRef, useMemo} from 'react'
import axios from 'axios'
import PokemonItem from '../components/PokemonItem'
import {HiOutlineSearchCircle} from 'react-icons/hi'

const PokemonList = () => {

    const [config, setConfig] = useState({
        limit: 16,
        offset: 1,
    })
    const [search, setSearch] = useState('')
    const [listPokemon, setListPokemon] = useState([])


    const baseURL = `https://pokeapi.co/api/v2/pokemon?limit=${config.limit}offset=${config.offset}`
    const baseSearchURL = `https://pokeapi.co/api/v2/pokemon/${search}`


    const fetchPokemon = async () => {
        const result = await axios.get(baseURL)
        setListPokemon(result.data.results)
        console.log(listPokemon)
    }

    const inputRef = useRef(null)

    const searchPokemon = async () => {
        const result = await axios.get(baseSearchURL)
        setListPokemon([result.data])
    }

    useEffect(() => {
        fetchPokemon()
    } , [config])

    useEffect(() => {
        if(search.length > 0){
            searchPokemon()
        }
    } , [search])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPokemon()
    }













  return (
    <div className='w-full h-full flex-1 flex-wrap '>
        <div className=' px-5 py-2 bg-[#5800FF] tracking-wider flex-row flex justify-between'>
           <div className=' text-white text-2xl text-center cursor-pointer 
                hover:text-3xl hover:translate-x-2 ease-out duration-300 transition-all'>Pokemon API</div> 
           <div className='flex flex-row items-center box-border border rounded-full px-4 '>
            <HiOutlineSearchCircle 
                onClick={() => inputRef.current.focus()}
                className='text-white text-xl'/>
            <input 
                ref={inputRef} 
                onChange={handleSearch}
                value={search}
                onSubmit={handleSubmit}
                type="text" 
                className=' px-5 py-[2px] bg-[#5800FF] tracking-wider outline-none text-white' placeholder='Search Pokemon'/>
           </div>

            
        </div>
        <div className='flex flex-row justify-center items-center'>
            <PokemonItem
                listPokemon={listPokemon}
            />

        </div>
    </div>
  )
}

export default PokemonList