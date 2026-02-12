import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'

import LoginPage from './pages/LoginPage.jsx'
import LayoutBase from './layouts/LayoutBase.jsx'
import LayoutAdmin from './layouts/LayoutAdmin.jsx'
import MoviesPage from './pages/MoviesPage.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<LayoutBase />}>
        <Route path='/login' element={<LoginPage />} />
        
      </Route>

      <Route element={<LayoutAdmin />}>
        <Route path='/' element={<MoviesPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
