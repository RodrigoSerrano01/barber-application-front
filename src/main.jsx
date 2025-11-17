import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './pages/Home/Index.jsx'
import Login from './pages/Login/'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
  </StrictMode>,
)
