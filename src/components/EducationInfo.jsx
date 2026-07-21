import { useState } from "react"
import ElementInfo from "./MultiEntryInfo.jsx"

function EducationInfo() {
  const [info, setInfo] = useState([
    { id: crypto.randomUUID(), school: "Hogwards", course: "magic", startDate: "17/07/2020", endDate: "17/07/2026" },
    { id: crypto.randomUUID(), school: "egnortr", course: "magic", startDate: "17/07/2020", endDate: "17/07/2026" }
  ])
  
  const initialEntry = {id: crypto.randomUUID(), school: "", course: "", startDate: "", endDate: "" }

  return (
  ElementInfo("Education",()=>info, setInfo, initialEntry)
  )
}

export default EducationInfo
