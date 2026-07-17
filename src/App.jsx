import { useState } from 'react'
import PersonalInfo from "./components/PersonalInfo.jsx"
import EducationInfo from "./components/EducationInfo.jsx"
import PracticalInfo from "./components/PracticalInfo.jsx"

function App() {

  return (
    <>
      <h1>Cv</h1>
      <PersonalInfo />
      <EducationInfo />
      <PracticalInfo />
    </>
  )
}

export default App
