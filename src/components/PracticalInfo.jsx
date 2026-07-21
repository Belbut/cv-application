import ElementInfo from "./MultiEntryInfo.jsx"

function PracticalInfo({ info, setInfo }) {
  // const [info, setInfo] = useState([{ company: "Hogwards", position: "magic", startDate: "17/07/2020", endDate: "17/07/2026" }])

  const initialEntry = { company: "", position: "", startDate: "", endDate: "" }

  return (
    ElementInfo("work", () => info, setInfo, initialEntry)
  )
}

export default PracticalInfo
