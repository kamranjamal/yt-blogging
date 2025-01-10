import React from 'react'
import { bloggingData } from '../data'
import HersoSection from './HersoSection'
import BloggingCard from './BloggingCard'

function Home() {
  return (
    <div className='bg-[#0a192f] min-h-screen text-white'>
    <HersoSection />
    <div className='p-4 min-h-screen mt-8'>
      <h2 className='text-2xl font-semibold text-center my-4'> Daily Blogs</h2>
    <div className='flex gap-3 flex-wrap justify-center'>
      {
        bloggingData.map((blog,index)=>{
          return(
            <BloggingCard blog={blog} key={index} />
          )
        })
      }
    </div>
    </div>

  </div>
  )
}

export default Home