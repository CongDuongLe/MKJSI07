import React,{useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

const PokemonItem = (props) => {

    const {listPokemon} = props
    console.log(listPokemon)

    const [fullPokemon, setFullPokemon] = useState([])
    const [loading, setLoading] = useState(false)

    
    const getPokemon = useCallback(async () => {
        setLoading(true)
        const promises = listPokemon.map(async (pokemon) => {
            const response = await axios.get(pokemon.url)
            return response.data
        })
        const results = await Promise.all(promises)
        setFullPokemon(results)
        console.log('full Pokemon', fullPokemon)
        setLoading(false)
    }, [listPokemon, fullPokemon])

    useEffect(() => {
        getPokemon()
    },  [listPokemon])
  



    const renderListPokemon = useCallback(() => {
        return listPokemon.map((item, index) => {
          return(
            <div className='flex flex-row'>
              {/* for pokemon name */}
              <div 
                  onClick={() => renderPopup(index)}
                  key={index}
                  className='px-4 py-8 mx-4 rounded-md text-lg text-[#EB4747] bg-slate-200 hover:text-[#1C3879] flex justify-center items-center
                      hover:bg-[#B1E1FF] transition-all ease-out duration-300 hover:scale-105 max-w-xl'>
                      {item.name}   
                      { loading ? <div className='animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-gray-900'></div> : (
                          fullPokemon[index] && <img src={fullPokemon[index].sprites.front_default} alt={item.name} />)
                      }
                      {/* {
                          fullPokemon[index] && <img src={fullPokemon[index].sprites.front_default} alt={item.name} />
                      } */}
              </div>                  
            </div>
          )
        }
        )},[listPokemon, fullPokemon, loading])


    const renderPopup = useCallback(() => {
        return listPokemon.map((item, index) => {
          return(
            <Popup
                trigger={<button className='px-4 py-8 mx-4 rounded-md text-lg text-[#EB4747] bg-slate-200 hover:text-[#1C3879] flex justify-center items-center
                    hover:bg-[#B1E1FF] transition-all ease-out duration-300 hover:scale-105 max-w-xl'>
                    {item.name} 
                    { loading ? <div className='animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-gray-900'></div> : (
                        fullPokemon[index] && <img src={fullPokemon[index].sprites.front_default} alt={item.name} />)
                    }
                </button>}
                modal
                nested
            />
        )})},[listPokemon, fullPokemon, loading])


  return (
    <div className='w-full h-auto grid grid-cols-4 gap-y-4 mt-4'>
      {renderListPokemon()}

    </div>
  ) 
}

export default PokemonItem