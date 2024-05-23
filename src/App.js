import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import PostForm from './PostForm';

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Dashboard' element={<PostForm/>}/>
  </Routes>
  
  </BrowserRouter>
  )
}

export default App
