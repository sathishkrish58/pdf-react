import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Headers from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Headers userName='Sathish'/>
    {/* <App /> */}
  </StrictMode>,
)
