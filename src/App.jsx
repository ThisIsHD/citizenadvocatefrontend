// import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Homepage from './government/pages/Homepage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Government side routes */}
        <Route path="/:gov_id" element={<Homepage/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
