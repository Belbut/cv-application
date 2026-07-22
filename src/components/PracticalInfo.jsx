import ElementInfo from "./MultiEntryInfo.jsx"

function PracticalInfo({ info, setInfo }) {
  // const [info, setInfo] = useState([{ company: "Hogwards", position: "magic", startDate: "17/07/2020", endDate: "17/07/2026" }])

  const initialEntry = { id: crypto.randomUUID(), company: "", position: "", startDate: "", endDate: "" }

  return (
    <ElementInfo type={"Work"} info={info} setInfo={setInfo} initialEntry={initialEntry} />
  )
}

export default PracticalInfo
