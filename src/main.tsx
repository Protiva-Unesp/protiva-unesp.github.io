import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CategoryProvider } from './components/categoryProvider/CategoryProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CategoryProvider>
        <App />
    </CategoryProvider>
  </React.StrictMode>,
)
