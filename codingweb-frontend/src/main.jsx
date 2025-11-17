import { StrictMode } from 'react'
import {BrowserRouter} from 'react-router'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Test from './Test.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Test/>
    </BrowserRouter>
  </StrictMode>,
)
