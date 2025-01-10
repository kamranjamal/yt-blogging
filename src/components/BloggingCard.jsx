import React from 'react'
import { bloggingData } from '../data'
function BloggingCard({blog}) {
    console.log(bloggingData)
  return (
    <div className=' rounded-md shadow-lg p-4 w-[300px]  bg-[#291b1b] cursor-pointer hover:scale-105 hover:brightness-90 h-fit'>
        <img src={blog.img} className='w-full h-[250px] object-cover' alt="" />
        <h1 className='text-xl font-semibold truncate'>{blog.title}</h1>
        <div className='flex justify-between mt-2'>
        <h2 className='text-sm'>{blog.author}</h2>
        <h2 className='text-sm bg-black text-white p-1 rounded-lg'>{blog.category}</h2>

        </div>

    </div>
  )
}

export default BloggingCard