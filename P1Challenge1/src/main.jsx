import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Search from './Search.jsx'
import Movies from './Movies.jsx'
import Tv from './Tv.jsx'
import Favorite from './Favorite.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { FavoriteProvider } from './FavoriteContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/tv" element={<Tv />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/favorite" element={<Favorite />}/>
        </Routes>
      </FavoriteProvider>
    </BrowserRouter>
  </StrictMode>,
)
