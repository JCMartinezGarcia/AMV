import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from "@heroui/react";
import App from './App.jsx'
import axios from 'axios';
import './index.css'

axios.defaults.baseURL = "http://localhost:3000/api/";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </StrictMode>,
)
