import React from 'react'
import Header from './components/Home/Header'
import MainContent from './components/Home/MainContent'
import Footer from './components/Home/Footer'

const Home = () => {
  return (
    <div className="w3-content" style={{maxWidth:"1800px"}}>
      <Header />
      <MainContent/>
      <Footer/>
   </div>
  )
}

export default Home