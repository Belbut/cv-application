import ElementInfo from "./MultiEntryInfo.jsx"

function EducationInfo({ info, setInfo }) {

  const initialEntry = { id: crypto.randomUUID(), school: "", course: "", startDate: "", endDate: "" }

  return (
    <ElementInfo type={"Education"} info={info} setInfo={setInfo} initialEntry={initialEntry} key={"education"} />
  )
}

export default EducationInfo
