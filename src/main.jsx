import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Right from './Componentes/Right.jsx'
import Left from './Componentes/Left.jsx'
import Bottom from './Componentes/Bottom.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Left />
    <Right />
    <Bottom />
  </StrictMode>,
)
