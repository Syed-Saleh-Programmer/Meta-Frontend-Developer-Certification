import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProjectDetail from './pages/ProjectDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/'>
          <Route path='' element={<App />} />
          <Route path='project/:id' element={<ProjectDetail />} />
          <Route path='*' element={
            <h1
            className='text-2xl font-semibold mx-auto p-8'
            >
              Page Not Found.
            </h1>
          } />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
