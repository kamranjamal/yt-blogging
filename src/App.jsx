import React from 'react'
import HersoSection from './components/HersoSection'
import BloggingCard from './components/BloggingCard'
import { bloggingData } from './data'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SingleBlog from './components/SingleBlog'

function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/blogging/:id' element={<SingleBlog/>}></Route>
    </Routes>
   </div>
  )
}

export default App