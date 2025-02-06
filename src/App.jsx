// import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import MinistryofHealthandFamilyWelfare from './government/pages/MinistryofHealthandFamilyWelfare'
import MinistryofHomeAffairs from './government/pages/MinistryofHomeAffairs'
import MinistryofWomenandChildDevelopment from './government/pages/MinistryofWomenandChildDevelopment'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Government side routes */}
        <Route path="/MinistryofHealthandFamilyWelfare/:gov_id" element={<MinistryofHealthandFamilyWelfare />} />
        <Route path="/MinistryofHomeAffairs/:gov_id" element={<MinistryofHomeAffairs />} />
        <Route path="/MinistryofWomenandChildDevelopment/:gov_id" element={<MinistryofWomenandChildDevelopment />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
