import { useState } from 'react'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import {Routes, Route} from 'react-router-dom'
import './css/App.css'
import NavBar from './components/NavBar'
import { MovieProvider } from './context/MovieContext'

function App() {
  return (
  <MovieProvider>
    <NavBar />  
    <main className="manin-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </main>
  </MovieProvider>
  )
}

export default App
