import React from 'react'

const PostItem = (props) => {
    const { index, onClick, item} = props
  return (
    <div
      onClick={onClick}
      key={index}
      className="
        px-8 py-2 ml-2 bg-sky-600 text-white rounded-md
        hover:bg-lime-500 transition-all easing duration-400 cursor-pointer
        transform hover:scale-105
        "
    >
      {item}
    </div>
  );
}

export default PostItem