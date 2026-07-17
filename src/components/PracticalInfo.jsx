import Info from "./Info.jsx"
import { useState } from "react"

function PracticalInfo() {
  const [info, setInfo] = useState({ company: "Hogwards", position: "magic", startDate: "17/07/2020", endDate: "17/07/2026" })

  return (
    <>
      <h2>Work</h2>
      <div className="work-information">
        <div className="work">
          <Info info={info} setInfo={setInfo} contentType="company" />
          <Info info={info} setInfo={setInfo} contentType="position" />
          <Info info={info} setInfo={setInfo} contentType="startDate" />
          <Info info={info} setInfo={setInfo} contentType="endDate" />
        </div>
      </div>
    </>
  )
}

export default PracticalInfo
