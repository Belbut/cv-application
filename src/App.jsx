import { useState } from 'react'
import PersonalInfo from "./components/PersonalInfo.jsx"
import EducationInfo from "./components/EducationInfo.jsx"
import PracticalInfo from "./components/PracticalInfo.jsx"

function App() {

  const [info, setInfo] = useState({
    "personal": { name: "John dos Passos", email: "jotndospassos@gmail.com", phone: "###" },
    "education": [
      { id: crypto.randomUUID(), school: "Hogwards", course: "magic", startDate: "17/07/2020", endDate: "17/07/2026" },
      { id: crypto.randomUUID(), school: "egnortr", course: "magic", startDate: "17/07/2020", endDate: "17/07/2026" }
    ],
    "work": []
  })

  const individualSetInfo = (type) => {
    return (fn) => setInfo(prev => ({ ...prev, [type]: fn }))
  }

  console.log(info["education"])

  return (
    <>
      <h1>Cv</h1>
      {/* <PersonalInfo */}
      {/*   info={info["personal"]} */}
      {/*   setInfo={individualSetInfo("personal")} */}
      {/* /> */}

      <EducationInfo
        info={info["education"]}
        setInfo={individualSetInfo("education")}
      />

      <PracticalInfo
        info={info["work"]}
        setInfo={individualSetInfo("work")}
      />
    </>
  )
}

export default App
