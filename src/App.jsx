// import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import MinistryofHealthandFamilyWelfare from './government/pages/MinistryofHealthandFamilyWelfare'
import MinistryofHomeAffairs from './government/pages/MinistryofHomeAffairs'
import MinistryofWomenandChildDevelopment from './government/pages/MinistryofWomenandChildDevelopment'
import MinistryofConsumerAffairsFoodandPublicDistribution from './government/pages/MinistryofConsumerAffairsFoodandPublicDistribution'
import MinistryofRailways from './government/pages/MinistryofRailways'
import MinistryofRoadTransportandHighways from './government/pages/MinistryofRoadTransportandHighways'
import LandingPage from './users/components/LandingPage'
import UserLogin from './users/components/UserLogin'
import UserSign from './users/components/UserSign'
import GovtLogin from './users/components/GovtLogin'
import GovtSign from './users/components/GovtSign'
import CitizenDashboard from './users/components/CitizenDashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* User side routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/signup" element={<UserSign />} />
        <Route path="/govt/login" element={<GovtLogin />} />
        <Route path="/govt/signup" element={<GovtSign />} />
        <Route path="/user/citizendashboard" element={<CitizenDashboard />} />
        {/* Government side routes */}
        <Route path="/MinistryofHealthandFamilyWelfare/:gov_id" element={<MinistryofHealthandFamilyWelfare />} />
        <Route path="/MinistryofHomeAffairs/:gov_id" element={<MinistryofHomeAffairs />} />
        <Route path="/MinistryofWomenandChildDevelopment/:gov_id" element={<MinistryofWomenandChildDevelopment />} />
        <Route path="/MinistryofConsumerAffairsFoodandPublicDistribution/:gov_id" element={<MinistryofConsumerAffairsFoodandPublicDistribution />} />
        <Route path="/MinistryofRailways/:gov_id" element={<MinistryofRailways />} />
        <Route path="/MinistryofRoadTransportandHighways/:gov_id" element={<MinistryofRoadTransportandHighways />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
