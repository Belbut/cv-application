import ElementInfo from "./MultiEntryInfo.jsx"

function EducationInfo({ info, setInfo }) {

  const initialEntry = { id: crypto.randomUUID(), school: "", course: "", startDate: "", endDate: "" }

  return (
    ElementInfo("Education", () => info, setInfo, initialEntry)
  )
}

export default EducationInfo
