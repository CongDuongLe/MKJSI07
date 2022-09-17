import React, {useState, useEffect} from 'react'
import axios from 'axios'
import RandomQuoteItem from '../components/RandomQuoteItem'

const Random = () => {

    const baseURL ='https://api.quotable.io/random'

    // const [quotes, setQuotes] = useState([])

    // const getRandomQuote = async () => {
    //     const result = await axios.get(baseURL)
    //     setQuotes(result)

    //     console.log('quotes', quotes)
    // }


    const [author, setAuthor] = useState('Loading ...')
    const [quote, setQuote] = useState('Loading ...')



    const randomQuote = async () => {
      const result = await axios.get(baseURL)
      setAuthor(result.data.author)
      setQuote(result.data.content)
    }

    useEffect(() => {
      randomQuote()
    } , [])




  return (
    <div className='mx-4 w-[70%] h-[50%] justify-center items-center'>
      <RandomQuoteItem author={author} quote={quote} />
      <div
        onClick={randomQuote}
        className="px-8 py-2 bg-[#4B7BE5] rounded-xl text-white mt-4 text-center cursor-pointer max-w-xs self-center
        text-lg hover:bg-[#001D6E] scale-105 ease-in-out duration-200 transition-all"
      >
        Random
      </div>
    </div>
  );
}

export default Random