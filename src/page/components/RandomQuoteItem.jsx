import React from 'react'

const RandomQuoteItem = (props) => {
    const {
        author,
        quote,   
    } = props
  return (
    <div className='flex flex-1 items-center justify-center flex-col' >
        <div className='text-3xl text-[#001D6E] '>"{quote}"</div>
        <div className='text-lg text-[#3D3C42] mt-4'>Author : {author}</div>
    </div>
  )
}

export default RandomQuoteItem