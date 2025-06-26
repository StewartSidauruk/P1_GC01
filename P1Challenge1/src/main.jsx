import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Search from './Search.jsx'
import Movies from './Movies.jsx'
import Tv from './Tv.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/tv" element={<Tv />}/>
        <Route path="/movies" element={<Movies />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
