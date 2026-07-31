import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './Layout/Navbar/Navbar'
const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  );
}

export default App
