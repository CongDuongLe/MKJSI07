import React,{useState} from 'react'
import { useUserStore } from '../../zustand/store/UserStore'

const UserSection = (props) => {

    const { nameProps } = props

    // const [count, setCount] = useState(0)

    // const Increase = () => {
    //     setCount(prevCount => prevCount +1)
    // }

    // const Decrease = () => {
    //     setCount(prevCount => prevCount -1)
    // }

    const { 
        globalCount,
        increaseGlobalCount,
        decreaseGlobalCount,
    } = useUserStore(state => state)






  return (
    <div  className='bg-[#AFB4FF] h-[100px] w-[400px] rounded-md flex flex-1 items-center justify-between mx-auto'>
        <p>Component UserSection</p>

        <h1>Count : {globalCount} </h1>
        <div className='flex flex-row '>
            <button 
                onClick={increaseGlobalCount}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Increase
            </button>
            <button 
                onClick={decreaseGlobalCount}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'>Decrease
            </button>

        </div>



    </div>
  )
}

export default UserSection