import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import MainPage from './pages/main/page.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage />
    <Footer />
  </StrictMode>,
)
