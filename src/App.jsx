import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './pages/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { MyStory } from './pages/MyStory'
import { Register } from './pages/Register'
import { Login } from './pages/Login'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-story" element={<MyStory />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
