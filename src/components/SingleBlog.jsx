import React from 'react'
import { bloggingData } from '../data'
import { useParams } from 'react-router-dom'


function SingleBlog() {
    const params=useParams()
    const singleBlogData=bloggingData.find((blog)=>blog.id===Number(params.id))
    console.log(singleBlogData)
  return (
    <div className='flex gap-6 p-6 justify-center bg-[#0a192f] min-h-screen text-white '>
        <img className={"h-[400px] rounded-xl"} src={singleBlogData.img} alt="" />
        <div>
            <h1 className='text-2xl font-semibold'>{singleBlogData.title}</h1>
            <p>{singleBlogData.description}</p>
            <div className='flex gap-20 my-6'>
                <p>{singleBlogData?.author}</p>
                <p>{singleBlogData?.category}</p>
                <p>{singleBlogData?.date}</p>
            </div>
        </div>
    </div>
  )
}

export default SingleBlog