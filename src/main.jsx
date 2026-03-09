import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/all.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
