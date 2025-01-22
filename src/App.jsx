import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page404 from './Page404'
import Dashboard from './admin/pages/Dashboard/Dashboard'
import Layout from './pages/Layout/Layout'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>

        </Route>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
