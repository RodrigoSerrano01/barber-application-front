import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './pages/Home/Index.jsx'
import Register from './pages/Register/index.jsx'
import Login from './pages/Login/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
  </StrictMode>,
)
