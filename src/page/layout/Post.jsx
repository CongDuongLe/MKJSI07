import React, {useState, useEffect} from 'react'
import PostItem from '../components/PostItem'
import axios from 'axios'
const Post = () => {
    const [data, setData] = useState([])
    const [type, setType] = useState('posts')

    const baseURL = `https://jsonplaceholder.typicode.com/${type}`
    const typeText = ['posts', 'users', 'albums']

    const fetchData = async () => {
        const result = await axios.get(baseURL)
        setData(result.data)
    }
    useEffect(() => {
        fetchData()
    } , [type])

    const handleClick = (type) => {
        setType(type)
    }


    // console.log de xem data thay doi nhe


  return (
    <div className = 'flex flex-1 flex-col items-center justify-center'>
    <div className='flex flex-row'>
        {/* <PostItem/> */}
       {
              typeText.map((item, index) => {
                return(
                <PostItem
                    onClick={() => handleClick(item)}
                    key={index} 
                    item={item}
                    />
                )
              })
            }

    </div>
    <div className='text-xl px-8 py-2 bg-slate-100 my-2 rounded-md'>
        <p>current type : {type}</p>
    </div>
    </div>
  )
}

export default Post