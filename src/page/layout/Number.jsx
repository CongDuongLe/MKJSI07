import React,{useState, useEffect} from 'react'

const Number = (props) => {
    const {number} = props

    const [count, setCount] = useState(number)

    const handleClick = () => {
        setCount(count - 1)
    }
    useEffect(() => {
        // setTimeout , setInterval
        const countId = setInterval(
            ()=> {
                setCount(prevCount => prevCount -1)
            },1000
        )
        return () => {
            clearInterval(countId)
        }

    } , [count])





  return (
    <div>
        <div className='text-3xl text-[#001E6C] tracking-wider font-semibold'>
            {count}
        </div>
        <div 
        // onClick ={handleClick}
        className='px-8 py-2 bg-[#4B7BE5] rounded-md text-white mt-4
        text-lg hover:bg-[#001D6E] scale-105 ease-in-out duration-200 transition-all'>
        Countdown
      </div>


    
    </div>
  )
}

export default Number