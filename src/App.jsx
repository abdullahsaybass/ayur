import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Home/Hero'
import Home from './components/Home/home'
import Footer from './components/Footer/Footer'
function App() {
  

  return (
    <>
     <Header />
     <Home />
     <Footer />
    </>
  )
}

export default App
