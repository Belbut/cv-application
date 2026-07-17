import Info from "./Info.jsx"
import { useState } from "react"

function EducationInfo() {
  const [info, setInfo] = useState({ school: "Hogwards", course: "magic", startDate: "17/07/2020", endDate: "17/07/2026" })

  return (
    <>
      <h2>Education</h2>
      <div className="education-information">
        <div className="course">
          <Info info={info} setInfo={setInfo} contentType="school" />
          <Info info={info} setInfo={setInfo} contentType="course" />
          <Info info={info} setInfo={setInfo} contentType="startDate" />
          <Info info={info} setInfo={setInfo} contentType="endDate" />
        </div>
      </div>
    </>
  )
}

export default EducationInfo
