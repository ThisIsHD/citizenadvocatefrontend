// import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import MinistryofHealthandFamilyWelfare from './government/pages/MinistryofHealthandFamilyWelfare'
import MinistryofHomeAffairs from './government/pages/MinistryofHomeAffairs'
import MinistryofWomenandChildDevelopment from './government/pages/MinistryofWomenandChildDevelopment'
import MinistryofConsumerAffairsFoodandPublicDistribution from './government/pages/MinistryofConsumerAffairsFoodandPublicDistribution'
import MinistryofRailways from './government/pages/MinistryofRailways'
import MinistryofRoadTransportandHighways from './government/pages/MinistryofRoadTransportandHighways'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Government side routes */}
        <Route path="/MinistryofHealthandFamilyWelfare/:gov_id" element={<MinistryofHealthandFamilyWelfare />} />
        <Route path="/MinistryofHomeAffairs/:gov_id" element={<MinistryofHomeAffairs />} />
        <Route path="/MinistryofWomenandChildDevelopment/:gov_id" element={<MinistryofWomenandChildDevelopment />} />
        <Route path="/MinistryofConsumerAffairsFoodandPublicDistribution/:gov_id" element={<MinistryofConsumerAffairsFoodandPublicDistribution/>}/>
        <Route path="/MinistryofRailways/:gov_id" element={<MinistryofRailways/>}/>
        <Route path="/MinistryofRoadTransportandHighways/:gov_id" element={<MinistryofRoadTransportandHighways/>}/>
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
