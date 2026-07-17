import Info from "./Info.jsx"
import { useState } from "react"

function Element({ content, editContent }) {

  return (
    <div className="course">
      <Info info={content} setInfo={editContent} contentType="school" />
      <Info info={content} setInfo={editContent} contentType="course" />
      <Info info={content} setInfo={editContent} contentType="startDate" />
      <Info info={content} setInfo={editContent} contentType="endDate" />
    </div>
  )
}

function EducationInfo() {
  const [info, setInfo] = useState([{ id: 0, school: "Hogwards", course: "magic", startDate: "17/07/2020", endDate: "17/07/2026" }])

  const findRecord = (id) => {
    return info.find((school) => school.id == id)
  }

  const editRecord = (id) => {
    return (fn) => {
      setInfo(
        info.map(school => {
          return school.id == id ? fn(school) : school
        })
      )
    }
  }

  const renderRecordList = () => {
    return info.map((r) => {
      return (<Element
        key={r.id}
        content={findRecord(r.id)}
        editContent={editRecord(r.id)}
      />)
    })
  }

  return (
    <>
      <h2>Education</h2>
      <div className="education-information">
        {renderRecordList()}
      </div>
    </>
  )
}

export default EducationInfo
