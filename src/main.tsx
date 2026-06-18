import './index.css'
import App from './App.tsx'
import AppProvider from './context/context.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './utils/i18n/i18n.js'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
  </StrictMode>,
)
