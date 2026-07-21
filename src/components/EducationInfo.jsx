import Info from "./Info.jsx"
import { useState } from "react"

function Element({ content, editContent,removeRecord}) {

  return (
    <div className="course">
      <Info info={content} setInfo={editContent} contentType="school" />
      <Info info={content} setInfo={editContent} contentType="course" />
      <Info info={content} setInfo={editContent} contentType="startDate" />
      <Info info={content} setInfo={editContent} contentType="endDate" />
      <button onClick={removeRecord}>x</button>
      <br></br>
    </div>
  )
}

function EducationInfo() {
  const [info, setInfo] = useState([
    { id: 0, school: "Hogwards", course: "magic", startDate: "17/07/2020", endDate: "17/07/2026" },
    { id: 1, school: "Hogwards", course: "magic", startDate: "17/07/2020", endDate: "17/07/2026" }
  ])

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

  const addRecord = () => {
    const new_entry = { id: crypto.randomUUID(), school: "", course: "", startDate: "", endDate: "" }
    setInfo([...info,new_entry])
  }

  const removeRecord =(id)=>{
    setInfo(info.filter(entry=> entry.id != id))
  }

  const renderRecordList = () => {
    return info.map((r) => {
      return (
        <Element
        key={r.id}
        content={findRecord(r.id)}
        editContent={editRecord(r.id)}
        removeRecord={()=>removeRecord(r.id)}
        />
      )
    })
  }

  return (
    <>
      <h2>Education</h2>
      <div className="education-information">
        {renderRecordList()}
        <button onClick={()=>addRecord()}>+</button>
      </div>
    </>
  )
}

export default EducationInfo
